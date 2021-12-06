exports.queryList = {
    GET_STORE_LIST_QUERY: "SELECT id, name, storeCode, createdOn, createdBy FROM bms.store;",
    SAVE_STORE_QUERY: "INSERT INTO bms.store (name, storeCode, createdOn, createdBy, address) VALUES($1, $2, $3, $4, $5) returning *;",
}