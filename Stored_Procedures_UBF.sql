CREATE PROCEDURE ArtikujtFromMenuIdSelect_sp (@MenuId INT)
AS
BEGIN
	SELECT A.Id
		,Pershkrimi
		,Cmimi
	FROM Artikulli A
	INNER JOIN ArtikujtMenus AM ON A.Id = AM.ArtikulliId
	WHERE AM.MenuId = @MenuId
END

CREATE PROCEDURE AllArticlesSelect_sp
AS
BEGIN
	SELECT Id
		,Pershkrimi
		,Cmimi
	FROM Artikulli
END

CREATE PROCEDURE PikaSelect_sp (@PikaId INT = NULL)
AS
BEGIN
	SELECT Id
		,KorporataId
		,Pershkrimi
		,AdresaId
		,NrTelefonit
		,MenuId
	FROM Pika P
	WHERE @PikaId IS NULL
		OR @PikaId = P.Id
END

CREATE PROCEDURE PorositesiInsert_sp (
	@Emri VARCHAR(255)
	,@Mbiemri VARCHAR(255)
	,@Email VARCHAR(255)
	,@Password VARCHAR(255)
	,@AdresaPershkrimi VARCHAR(255)
	,@MenyraPagesesId INT
	,@AdresaX DECIMAL(18, 12)
	,@AdresaY DECIMAL(18, 12)
	,@AdresaZ DECIMAL(18, 12)
	)
AS
BEGIN
	DECLARE @AdresaEReID BIGINT

	INSERT INTO Adresa
	VALUES (
		@AdresaX
		,@AdresaY
		,@AdresaZ
		,@AdresaPershkrimi
		)

	SELECT @AdresaEReID = MAX(Id)
	FROM Adresa

	DECLARE @PerdoruesiIRi BIGINT

	INSERT INTO Perdoruesi
	VALUES (
		@Emri
		,@Mbiemri
		,@Email
		,@AdresaEReID
		,@Password
		)

	SELECT @PerdoruesiIRi = MAX(Id)
	FROM Perdoruesi

	INSERT INTO Porositesi
	VALUES (
		@PerdoruesiIRi
		,@MenyraPagesesId
		)
END

CREATE PROCEDURE DerguesiInsert_sp (
	@AdresaPershkrimi VARCHAR(255)
	,@AdresaX DECIMAL(18, 12)
	,@AdresaY DECIMAL(18, 12)
	,@AdresaZ DECIMAL(18, 12)
	,@Emri VARCHAR(255)
	,@Mbiemri VARCHAR(255)
	,@Email VARCHAR(255)
	,@Password VARCHAR(255)
	,@MenyraDergesesPershkrimi VARCHAR(255)
	)
AS
BEGIN
	DECLARE @AdresaEReID BIGINT

	INSERT INTO Adresa
	VALUES (
		@AdresaX
		,@AdresaY
		,@AdresaZ
		,@AdresaPershkrimi
		)

	SELECT @AdresaEReID = MAX(Id)
	FROM Adresa

	DECLARE @PerdoruesiIRi BIGINT

	INSERT INTO Perdoruesi
	VALUES (
		@Emri
		,@Mbiemri
		,@Email
		,@AdresaEReID
		,@Password
		)

	SELECT @PerdoruesiIRi = MAX(Id)
	FROM Perdoruesi

	DECLARE @MenyraDergesesEReID INT

	INSERT INTO MenyraDergeses
	VALUES (@MenyraDergesesPershkrimi)

	SELECT @MenyraDergesesEReID = MAX(id)
	FROM MenyraDergeses

	INSERT INTO Derguesi
	VALUES (
		@PerdoruesiIRi
		,@MenyraDergesesEReID
		,5.0
		)
END

CREATE PROCEDURE MenaxhuesiInsert_sp (
	@AdresaPershkrimi VARCHAR(255)
	,@AdresaX DECIMAL(18, 12)
	,@AdresaY DECIMAL(18, 12)
	,@AdresaZ DECIMAL(18, 12)
	,@Emri VARCHAR(255)
	,@Mbiemri VARCHAR(255)
	,@Email VARCHAR(255)
	,@Password VARCHAR(255)
	,@KorporataPershkrimi VARCHAR(255)
	,@KorporataEmail VARCHAR(255)
	,@Komuna VARCHAR(255)
	)
AS
BEGIN
	DECLARE @AdresaEReID BIGINT

	INSERT INTO Adresa
	VALUES (
		@AdresaX
		,@AdresaY
		,@AdresaZ
		,@AdresaPershkrimi
		)

	SELECT @AdresaEReID = MAX(Id)
	FROM Adresa

	DECLARE @PerdoruesiIRi BIGINT

	INSERT INTO Perdoruesi
	VALUES (
		@Emri
		,@Mbiemri
		,@Email
		,@AdresaEReID
		,@Password
		)

	SELECT @PerdoruesiIRi = MAX(Id)
	FROM Perdoruesi

	DECLARE @KorporataEReID BIGINT

	INSERT INTO Korporata
	VALUES (
		@KorporataPershkrimi
		,@KorporataEmail
		,'00'
		,0
		,@Komuna
		)

	SELECT @KorporataEReID = MAX(id)
	FROM Korporata

	INSERT INTO Menaxhuesi
	VALUES (
		@PerdoruesiIRi
		,@KorporataEReID
		)
END

CREATE PROCEDURE PerdoruesiPorositesLogin_sp (
	@Email VARCHAR(255)
	,@Password VARCHAR(255)
	)
AS
BEGIN
	SELECT P.Id
	FROM Perdoruesi P
	INNER JOIN Porositesi PR ON P.Id = PR.PerdoruesiId
	WHERE @Email = P.Email
		AND @Password = P.Password
END

CREATE PROCEDURE PerdoruesiMenaxhuesLogin_sp (
	@Email VARCHAR(255)
	,@Password VARCHAR(255)
	)
AS
BEGIN
	SELECT P.Id
		,M.KorporataId
	FROM Perdoruesi P
	INNER JOIN Menaxhuesi M ON P.Id = M.PerdoruesiId
	WHERE @Email = P.Email
		AND @Password = P.Password
END

CREATE PROCEDURE PerdoruesiDerguesLogin_sp (
	@Email VARCHAR(255)
	,@Password VARCHAR(255)
	)
AS
BEGIN
	SELECT P.Id
	FROM Perdoruesi P
	INNER JOIN Derguesi D ON P.Id = D.PerdoruesiId
	WHERE @Email = P.Email
		AND @Password = P.Password
END


CREATE PROCEDURE PikaInsert_sp(
	@KorporataId bigint,
	@PikaPershkrimi varchar(255),
	@AdresaPershkrimi VARCHAR(255),
	@AdresaX DECIMAL(18, 12),
	@AdresaY DECIMAL(18, 12),
	@AdresaZ DECIMAL(18, 12),
	@NrTelefonit varchar(255)
	)
AS
BEGIN
	DECLARE @AdresaEReID BIGINT

	INSERT INTO Adresa
	VALUES (
		@AdresaX,
		@AdresaY,
		@AdresaZ,
		@AdresaPershkrimi
		)

	SELECT @AdresaEReID = MAX(Id)
	FROM Adresa

	DECLARE @MenuEReID BIGINT
	
	INSERT INTO Menu values(@PikaPershkrimi)

	SELECT @MenuEReID = MAX(Id)
	FROM Menu

	INSERT INTO Pika 
	VALUES(
		@KorporataId,
		@PikaPershkrimi,
		@AdresaEReID,
		@NrTelefonit,
		@MenuEReID
	)
END



CREATE PROCEDURE Top3Articles_sp
AS
BEGIN
	SELECT TOP 3 Id, Pershkrimi, Cmimi from Artikulli
END


CREATE PROCEDURE RestaurantsFromCorpId_sp (
	@CorpId bigint
)
AS
BEGIN
	SELECT Id, KorporataId, Pershkrimi, AdresaId, NrTelefonit, MenuId FROM PIKA
	WHERE KorporataId = @CorpId
END



CREATE PROCEDURE DeleteRestaurntById_sp(
	@RestaurantId bigint,
	@MenuId bigint
)
AS
BEGIN
	DELETE FROM PIKA WHERE Id = @RestaurantId
	DELETE FROM Menu where Id = @MenuId
END

CREATE PROCEDURE InsertArtikulliMenus_sp(
	@Pershkrimi varchar(255),
	@Cmimi decimal(18,2),
	@MenuId bigint
)
AS 
BEGIN
	DECLARE @ArtikulliRi BIGINT
	INSERT INTO Artikulli VALUES(@Pershkrimi, @Cmimi)
	SELECT @ArtikulliRi = MAX(Id) FROM Artikulli

	INSERT INTO ArtikujtMenus VALUES(@ArtikulliRi, @MenuId)
END

CREATE PROCEDURE PorosiaNgaPorositesiHeaderInsert_sp (
	@PorositesiId BIGINT
	,@PikaID INT
	,@Komenti VARCHAR(255) = NULL
	)
AS
BEGIN
	INSERT INTO Porosia (
		PorositesiId
		,DataERegjistrimit
		,DerguesiID
		,PikaID
		,DataEPerfundimit
		,DataEMarrjesNgaDerguesi
		,DataEPranimit
		,Komenti
		,AdresaSekondare
		,Anuluar
		)
	VALUES (
		@PorositesiId
		,GETDATE()
		,NULL
		,@PikaID
		,NULL
		,NULL
		,NULL
		,@Komenti
		,NULL
		,0
		)
		select MAX(Id) from Porosia
END

CREATE PROCEDURE PorosiaNgaPorositesiDetaleInsert_sp (
	@PorosiaId BIGINT
	,@ArtikulliId BIGINT
	,@Sasia DEC(18, 2)
	,@Rabati DEC(18, 2)=null
	,@EkstraRabati DEC(18, 2)=null
	,@Cmimi DEC(18, 3)
	)
AS
BEGIN
	INSERT INTO PorosiaDetale (
		PorosiaId
		,ArtikulliId
		,Sasia
		,Rabati
		,EkstraRabati
		,Cmimi
		,VleraPerfundimtare
		)
	VALUES (
		@PorosiaId
		,@ArtikulliId
		,@Sasia
		,@Rabati
		,@EkstraRabati
		,@Cmimi
		,@Sasia * @Cmimi
		)
END
