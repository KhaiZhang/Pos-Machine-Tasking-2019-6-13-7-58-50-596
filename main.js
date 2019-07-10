const data=[
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
];
printReceipt = barcodes =>{
    const Items=getItemInfoWithCount(barcodes);
    const receipt=createReceipt(Items);
    return receipt;
};

getItemInfoWithCount = barcodes =>{
    const Items=new Array();
    getItemInfoByBarcodes(barcodes).forEach(item => {
        let isExist=false;
        Items.forEach(itemWithCount => {
            if(item.id==itemWithCount.id){
                itemWithCount.count++;
                isExist=true;
            }
        });
        if(!isExist){
            item.count=1;
            Items.push(item);
        }
    });
    return Items;
};

getItemInfoByBarcodes = barcodes =>{
    const Items=new Array();
    barcodes.forEach(barcode => {
        loadAllItemInfos().forEach(item => {
            if(barcode==item.id){
                Items.push(item);
            }
        });
        
    });
    return Items;
};

loadAllItemInfos = () => data;

createReceipt = Items => {
    const partOfReceipt=renderReceiptDetails(Items);
    const price=getTotalPrice(Items);
    const receipt=`${partOfReceipt}
    Price: ${price}`;
    return receipt;
};

renderReceiptDetails = Items => {
    let receipt="";
    Items.forEach(item => {
        receipt+=renderReceiptDetail(item)+"\n";
    });
    return receipt;
};

renderReceiptDetail = Item => `${Item.name}     ${Item.price}     ${Item.count}`

getTotalPrice = Items => {
    let price=0;
    Items.forEach(item => {
        price+=item.price*item.count;
    });
    return price;
};

module.exports = {
    loadAllItemInfos,
    getItemInfoByBarcodes,
    getItemInfoWithCount,
    renderReceiptDetail,
    renderReceiptDetails,
    createReceipt,
    getTotalPrice,
    printReceipt
};