

select * from customers;
select * from salesman;
select * from orderss;
select * from item_mast ;
select * from company;
select * from emp_department;
select * from emp_details ;



--query 1
select ord_no as 'Order no' ,purch_amt as 'purchase amount' ,cust_name as 'Customer name',city from customers c join orderss o on c.salesman_id=o.salesman_id

--query 2

select cust_name as 'Customer Name' , Name as 'Salesman Name' from customers c join salesman s on c.salesman_id=s.salesman_id

--query 3

select cust_name as 'Customer Name' , Name as 'Salesman Name'  from customers c join salesman s on c.salesman_id=s.salesman_id
where commission>0.12

--query 4
select cust_name as 'CustomerName' , Name as 'salesman Name'   from customers c  join salesman s on c.salesman_id=s.salesman_id
where c.city <> (s.city) and s.commission >0.12

--query 5

select ord_no as 'Order number' ,ord_date as 'Order date' ,purch_amt as 'Amount' ,cust_name as 'Customer name' , Name as 'Salesman name' ,commission from customers 
c join orderss o on c.customer_id=o.customer_id
join salesman s on c.salesman_id=s.salesman_id

--query 6

select pro_name as 'Item name' ,pro_price as 'Price' ,com_name as 'Company Name' from item_mast i join company c on i.pro_com=c.com_id

--query 7
select distinct com_name as 'company name' from company c join item_mast i on c.com_id=i.pro_com where i.pro_price>=350

--query 8



select emp_fname as 'first_name',emp_lname as 'last_name', DPT_Name as 'Department_name' ,DPT_ALLOTMENT as 'sanction_amount'
from emp_details edt join emp_department edpt on edt.emp_dpt=edpt.DPT_CODE 



