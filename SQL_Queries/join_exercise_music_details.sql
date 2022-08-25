--query 1
select T.Name as 'TrackName',T.composer,T.Milliseconds,T.bytes,al.Title as 'AlbumName',m.Name as 'mediaName',g.Name as 'genreName'
from Track T join Album al on T.AlbumId=al.AlbumId
join MediaType m on m.MediaTypeId=T.MediaTypeId
join Genre g on g.GenreId=T.GenreId

--query 2
select concat(c.FirstName,' ',c.LastName) as 'FullName' ,inv.invoiceid,inv.invoicedate,inv.billingcountry
from Customer c join invoice inv on c.CustomerId=inv.CustomerId
group by c.FirstName,c.LastName ,inv.invoiceid,inv.invoicedate,inv.billingcountry having inv.BillingCountry='Brazil'

--query 4
select (emp.FirstName+ ' '+emp.LastName) as 'Sales Agent' ,inv.invoiceid,inv.customerid,inv.invoicedate,inv.InvoiceDate,inv.billingcity,inv.billingstate,inv.billingcountry,inv.billingpostalcode,inv.total
from Employee emp join invoice inv on emp.EmployeeId=inv.InvoiceId

--query 5
 select inv.invoicelineid,inv.invoiceid,t.trackid,inv.unitprice,inv.quantity,al.title as 'track',ar.name 'artist'
   from track t join InvoiceLine inv on t.TrackId=inv.TrackId 
   join album al on t.AlbumId=al.AlbumId
   join artist ar on al.ArtistId=ar.ArtistId where InvoiceLineId in  (579,1,1154,1728,2)

--query 7
select c.FirstName as 'Customer_name',inv.InvoiceDate as 'orderdate'
from Customer c join Invoice inv on c.CustomerId=inv.CustomerId where InvoiceDate<='2012-03-11' and InvoiceDate>='2012-01-01'








