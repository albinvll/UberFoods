CREATE PROCEDURE ArtikujtFromMenuIdSelect_sp(
	@MenuId int
)
AS
BEGIN
	SELECT A.Id,Pershkrimi,Cmimi FROM Artikulli A
	INNER JOIN ArtikujtMenus AM on A.Id = AM.ArtikulliId
	WHERE AM.MenuId = @MenuId
END


CREATE PROCEDURE PikaSelect_sp(
	@PikaId int = null
)AS BEGIN
SELECT Id
      ,KorporataId
      ,Pershkrimi
      ,AdresaId
      ,NrTelefonit
      ,MenuId
	  FROM Pika P
	  WHERE @PikaId is null or @PikaId = P.Id
END