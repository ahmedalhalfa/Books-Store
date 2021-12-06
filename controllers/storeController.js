const queries = require("../db/queries");
const dbConnection = require("../db/connection");
const utililty = require("../util/utility");

exports.getStoreList = async (req, res) => {
  try {
    let storeListQuery = queries.queryList.GET_STORE_LIST_QUERY;
    let result = await dbConnection.dbQuery(storeListQuery);
    return res.status(200).send(JSON.stringify(result.rows));
  } catch (err) {
    console.log("Error: " + err);
    return res.status(500).send({ error: "failed to send the list" });
  }
};

exports.saveStore = async (req, res, next) => {
  try {
    let createdBy = "admin";
    let createdOn = new Date();
    let storeName = req.body.storeName;
    let address = req.body.address;
    if (!storeName || !address)
      return res
        .status(500)
        .send({ error: "store name and address are required" });

    let storeCode = utililty.generateStoreCode();
    let values = [storeName, storeCode, createdOn, createdBy, address];
    let saveStoreQuery = queries.queryList.SAVE_STORE_QUERY;
    const result = await dbConnection.dbQuery(saveStoreQuery, values);
    return res.status(201).send(result.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).send({ error: " error: e " });
  }
};
