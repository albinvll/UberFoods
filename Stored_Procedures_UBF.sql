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

CREATE PROCEDURE PorositesiInsert_sp(
	@Emri varchar(255),
	@Mbiemri varchar(255),
	@Email varchar(255),
	@AdresaPershkrimi varchar(255),
	@MenyraPagesesId int,
	@AdresaX decimal(18,12),
	@AdresaY decimal(18,12),
	@AdresaZ decimal(18,12)
)AS BEGIN
	declare @AdresaEReID bigint

	INSERT INTO Adresa VALUES(@AdresaX,@AdresaY,@AdresaZ,@AdresaPershkrimi)

	select @AdresaEReID=MAX(Id) from Adresa
	
	declare @PerdoruesiIRi bigint
	
	INSERT INTO Perdoruesi VALUES(@Emri,@Mbiemri,@Email,@AdresaEReID)

	select @PerdoruesiIRi=MAX(Id) from Perdoruesi
	
	INSERT INTO Porositesi VALUES(@PerdoruesiIRi,@MenyraPagesesId)
END
 
CREATE PROCEDURE DerguesiInsert_sp(
	@AdresaPershkrimi varchar(255),
	@AdresaX decimal(18,12),
	@AdresaY decimal(18,12),
	@AdresaZ decimal(18,12),
	@Emri varchar(255),
	@Mbiemri varchar(255),
	@Email varchar(255),
	@MenyraDergesesPershkrimi varchar(255)
 )AS BEGIN
	declare @AdresaEReID bigint

	INSERT INTO Adresa VALUES(@AdresaX,@AdresaY,@AdresaZ,@AdresaPershkrimi)

	select @AdresaEReID=MAX(Id) from Adresa
	
	declare @PerdoruesiIRi bigint
	
	INSERT INTO Perdoruesi VALUES(@Emri,@Mbiemri,@Email,@AdresaEReID)

	select @PerdoruesiIRi=MAX(Id) from Perdoruesi

	declare @MenyraDergesesEReID bigint
	
	insert into MenyraDergeses Values (@MenyraDergesesPershkrimi)

	select MenyraDergesesEReID =MAX(id) from MenyraDergeses

	insert into Derguesi values(@PerdoruesiIRi,@MenyraDergesesEReID,5.0)
END

	
	