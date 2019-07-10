const functions = require("../main.js");

it ('given nothing when excuting loadAllItemInfos then return data', () => {
    expect(functions.loadAllItemInfos()).toEqual([
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ]);
});

it (`given [0001, 0003, 0005, 0003] when excuting getItemInfoByBarcodes then return 
[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
]`, () => {
    expect(functions.getItemInfoByBarcodes(['0001', '0003', '0005', '0003'])).toEqual([
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5}
    ]);
});

it (`given [0001, 0003, 0005, 0003] when excuting getItemInfoWithCount then return 
[
    {"id": "0001", "name" : "Coca Cola", "price": 3,"count": 1},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},
    {"id": "0005", "name" : "Dr Pepper", "price": 7,"count": 1}
]`, () => {
    expect(functions.getItemInfoWithCount(['0001', '0003', '0005', '0003'])).toEqual([
        {"id": "0001", "name" : "Coca Cola", "price": 3, "count": 1},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5, "count": 2},
        {"id": "0005", "name" : "Dr Pepper", "price": 7, "count": 1}
    ]);
});

it (`given {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2} 
    when excuting renderReceiptDetail 
    then return Pepsi-Cola     5     2`, () => {
    expect(functions.renderReceiptDetail({"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2})).toEqual(`Pepsi-Cola     5     2`);
});

it (`given [{"id": "0001", "name" : "Coca Cola", "price": 3,"count": 1},
            {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},
            {"id": "0005", "name" : "Dr Pepper", "price": 7,"count": 1}]
    when excuting renderReceiptDetails 
    then return
    Coca Cola     3     1
    Pepsi-Cola     5     2
    Dr Pepper     7     1`, () => {
    expect(functions.renderReceiptDetails([{"id": "0001", "name" : "Coca Cola", "price": 3,"count": 1},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},
    {"id": "0005", "name" : "Dr Pepper", "price": 7,"count": 1}])).toEqual(`Coca Cola     3     1`+"\n"+
    `Pepsi-Cola     5     2`+"\n"+
    `Dr Pepper     7     1`+"\n"
    );
});

it (`given [{"id": "0001", "name" : "Coca Cola", "price": 3,"count": 1},
            {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},
            {"id": "0005", "name" : "Dr Pepper", "price": 7,"count": 1}] 
    when excuting getTotalPrice 
    then return 20`, () => {
    expect(functions.getTotalPrice([{"id": "0001", "name" : "Coca Cola", "price": 3,"count": 1},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},
    {"id": "0005", "name" : "Dr Pepper", "price": 7,"count": 1}] )).toEqual(20);
});

it (`given [{"id": "0001", "name" : "Coca Cola", "price": 3,"count": 1},
            {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},
            {"id": "0005", "name" : "Dr Pepper", "price": 7,"count": 1}] 
    when excuting createReceipt 
    then return
    Coca Cola     3     1
    Pepsi-Cola     5     2
    Dr Pepper     7     1
    Price: 20`, () => {
    expect(functions.createReceipt([{"id": "0001", "name" : "Coca Cola", "price": 3,"count": 1},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},
    {"id": "0005", "name" : "Dr Pepper", "price": 7,"count": 1}] )).toEqual(
    `${`Coca Cola     3     1`+"\n"+
    `Pepsi-Cola     5     2`+"\n"+
    `Dr Pepper     7     1`+"\n"}
    Price: 20`);
});

it (`given ['0001', '0003', '0005', '0003'] 
    when excuting printReceipt 
    then return
    Coca Cola     3     1
    Pepsi-Cola     5     2
    Dr Pepper     7     1
    Price: 20`, () => {
    expect(functions.printReceipt(['0001', '0003', '0005', '0003'] )).toEqual(
    `${`Coca Cola     3     1`+"\n"+
    `Pepsi-Cola     5     2`+"\n"+
    `Dr Pepper     7     1`+"\n"}
    Price: 20`);
});