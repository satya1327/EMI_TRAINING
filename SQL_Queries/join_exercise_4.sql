
select * from RecordLabel;

select * from song;
select * from allbum
select * from aartist;

--query 1
select ar.Name as 'artist Name' ,r.Name as 'Record Label' from aartist ar join recordlabel r on ar.labelid=r.labelid

--query 2
select ar.name as 'Artist name',count(s.albumid) as 'number of songs' from aartist ar join Allbum al on ar.artistid=al.ArtistId 
join song s on al.ArtistId=s.albumid
group by ar.name,s.albumid order by s.albumid asc

-- query 3
select ar.Name as 'ArtistName',al.Name as 'AlbumName',count(s.albumid) as 'duration' from 
aartist ar join allbum al on ar.artistid=al.artistid
join song s on s.albumid=al.albumid
group by ar.name,al.name,s.albumid 

--query 4

select ar.Name as 'artist name' ,al.Name as 'album name' from aartist ar join allbum al on ar.artistid=al.artistid
group by ar.Name,al.Name having ar.name='Metallica'

--query 5

select (ar.name) as 'Artist name',sum(s.duration) as 'Song duration' from aartist ar join Allbum al on ar.artistid=al.ArtistId 
join song s on al.albumid=s.albumid
group by ar.name order by [Song duration] desc


 