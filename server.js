var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/'));


app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           data = customers[i];
           break;
        }
    }  
    res.json(data);
});

app.get('/customers', function(req,res){
   res.json(customers); 
});

app.get('/orders', function(req, res) {
    var orders = [];
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].orders) {
            for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
                orders.push(customers[i].orders[j]);   
            }
        }
    }  
    res.json(orders);
});


app.delete('/customers/:id',function(req,res){
    var customerId = parseInt(req.params.id);
    var data = {};
    for(var i = 0 , len = customers.len;i < len ;i++){
        if(customers[i].id == customerId){
            customers.splice(i,1);
            data = {status : true};
            break;
        }
    }
    res.json(data);
});


app.listen(8080);

console.log('Express is listening on port 8080');
    
    var customers = [
        {
            id : 1,
            name : 'vidhi',
            city : 'fullerton',
            orderTotal : 9.99,
            joined : '2000-12-02',
            //Array of orders
            orders : [
                {
                    id : 1,
                    product : 'shoes',
                    total : 9.99
                }
            ]
        },
        {
            id : 2,
            name : 'jinal',
            city : 'san fransico',
            orderTotal : 19.99,
            joined : '2016-01-23',
            orders : [
                {
                    id : 2,
                    product : 'baseball', 
                    total : 10
                },
                {
                    id : 3,
                    product : 'Bat',
                    total : 9.99
                }
            ]
        },
        {
            id : 3,
            name : 'nikunj',
            city : 'Irvine',
            orderTotal : 4.99,
            joined : '1992-10-02',
            orders : [
                {
                    id : 4,
                    product : 'cap',
                    total : 4.99
                }
            ]
        },
        {
            id : 4,
            name : 'shrushti',
            city : 'LA',
            orderTotal : 109.99,
            joined : '1995-03-28',
            orders : [
                {
                    id : 5,
                    product : 'Kindle',
                    total : 109.99
                }
            ]
        }
            
    ];