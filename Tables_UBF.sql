CREATE TABLE Adresa (
	Id BIGINT PRIMARY KEY IDENTITY(100, 25) NOT NULL
	,X DECIMAL(18, 12)
	,Y DECIMAL(18, 12)
	,Z DECIMAL(18, 12)
	,Pershkrimi VARCHAR(255)
	)

CREATE TABLE Perdoruesi (
	Id BIGINT PRIMARY KEY IDENTITY(100, 25) NOT NULL
	,Emri VARCHAR(255) NOT NULL
	,Mbiemri VARCHAR(255) NOT NULL
	,Email VARCHAR(255) NOT NULL
	,AdresaId BIGINT NOT NULL
	,Password VARCHAR(255) NOT NULL
	,CONSTRAINT [FK_Perdoruesi_Adresa_AdresaId] FOREIGN KEY (AdresaId) REFERENCES Adresa(Id)
	)

CREATE TABLE MenyraPageses (
	Id INT PRIMARY KEY IDENTITY NOT NULL
	,Pershkrimi VARCHAR(255) NOT NULL
	)

CREATE TABLE Porositesi (
	Id BIGINT PRIMARY KEY IDENTITY(100, 25) NOT NULL
	,PerdoruesiId BIGINT NOT NULL
	,MenyraPagesesId INT NOT NULL
	,CONSTRAINT [FK_Porositesi_Perdoruesi_PerdoruesiId] FOREIGN KEY (PerdoruesiId) REFERENCES Perdoruesi(Id)
	,CONSTRAINT [FK_Porositesi_MenyraPageses_MenyraPagesesId] FOREIGN KEY (MenyraPagesesId) REFERENCES MenyraPageses(Id)
	)

CREATE TABLE MenyraDergeses (
	Id INT PRIMARY KEY IDENTITY NOT NULL
	,Pershkrimi VARCHAR(255) NOT NULL
	)

CREATE TABLE Derguesi (
	Id BIGINT PRIMARY KEY IDENTITY(100, 25) NOT NULL
	,PerdoruesiId BIGINT NOT NULL
	,MenyraDergesesId INT NOT NULL
	,Rating DECIMAL(18, 2)
	,CONSTRAINT [FK_Derguesi_Perdoruesi_PerdoruesiId] FOREIGN KEY (PerdoruesiId) REFERENCES Perdoruesi(Id)
	,CONSTRAINT [FK_Derguesi_MenyraDergeses_MenyraDergesesId] FOREIGN KEY (MenyraDergesesId) REFERENCES MenyraDergeses(Id)
	)

CREATE TABLE Menaxhuesi (
	Id BIGINT PRIMARY KEY IDENTITY(100, 25) NOT NULL
	,PerdoruesiId BIGINT NOT NULL
	,KorporataId BIGINT NOT NULL
	,CONSTRAINT [FK_Menaxhuesi_Perdoruesi_PerdoruesiId] FOREIGN KEY (PerdoruesiId) REFERENCES Perdoruesi(Id)
	,CONSTRAINT [Fk_Menaxhuesi_Korporata_KorporataId] FOREIGN KEY (KorporataId) REFERENCES Korporata(Id)
	)

CREATE TABLE Korporata (
	Id BIGINT PRIMARY KEY IDENTITY(100, 25) NOT NULL
	,Pershkrimi VARCHAR(255) NOT NULL
	,Email VARCHAR(255) NOT NULL
	,NrTelefonit VARCHAR(255) NOT NULL
	,LimitiPikave INT
	,Komuna VARCHAR(255) NOT NULL
	,
	)

CREATE TABLE Artikulli (
	Id BIGINT PRIMARY KEY IDENTITY(100, 25) NOT NULL
	,Pershkrimi VARCHAR(255) NOT NULL
	,Cmimi DECIMAL(18, 2)
	,
	)

CREATE TABLE Menu (
	Id INT PRIMARY KEY IDENTITY NOT NULL
	,Pershkrimi VARCHAR(255) NOT NULL
	)

CREATE TABLE ArtikujtMenus (
	Id BIGINT PRIMARY KEY IDENTITY(10, 25) NOT NULL
	,ArtikulliId BIGINT NOT NULL
	,MenuId INT NOT NULL
	,CONSTRAINT [Fk_ArtikujtMenus_Artikulli_AritikulliId] FOREIGN KEY (ArtikulliId) REFERENCES Artikulli(Id)
	,CONSTRAINT [Fk_ArtikujtMenus_Menu_MenuId] FOREIGN KEY (MenuId) REFERENCES Menu(Id)
	)

CREATE TABLE Pika (
	Id INT PRIMARY KEY IDENTITY NOT NULL
	,KorporataId BIGINT NOT NULL
	,Pershkrimi VARCHAR(255) NOT NULL
	,AdresaId BIGINT NOT NULL
	,NrTelefonit VARCHAR(255) NOT NULL
	,MenuId INT NOT NULL
	,CONSTRAINT [Fk_Pika_Korporata_KorporataId] FOREIGN KEY (KorporataId) REFERENCES Korporata(Id)
	,CONSTRAINT [Fk_Pika_Adresa_AdresaId] FOREIGN KEY (AdresaId) REFERENCES Adresa(Id)
	,CONSTRAINT [Fk_Pika_Menu_MenuId] FOREIGN KEY (MenuId) REFERENCES Menu(Id)
	,
	)

CREATE TABLE Orari (
	Id INT PRIMARY KEY IDENTITY NOT NULL
	,OraHapjes DATETIME NOT NULL
	,OraMbylljes DATETIME NOT NULL
	,Mbyllur BIT NOT NULL
	,DitaId TINYINT NOT NULL
	,PikaId INT NOT NULL
	,CONSTRAINT [Fk_Orari_Pika_PikaId] FOREIGN KEY (PikaId) REFERENCES Pika(Id)
	)

CREATE TABLE Porosia (
	Id BIGINT PRIMARY KEY IDENTITY NOT NULL
	,PorositesiId BIGINT NOT NULL
	,DataERegjistrimit DATETIME
	,DerguesiID BIGINT 
	,PikaID INT NOT NULL
	,DataEPerfundimit DATETIME
	,DataEMarrjesNgaDerguesi DATETIME
	,DataEPranimit DATETIME
	,Komenti VARCHAR(255)
	,AdresaSekondare BIGINT
	,Anuluar BIT
	,CONSTRAINT [Fk_Porosia_Porositesi_PorositesiId] FOREIGN KEY (PorositesiId) REFERENCES Porositesi(PerdoruesiId)
	,CONSTRAINT [Fk_Porosia_Derguesi_DerguesiId] FOREIGN KEY (DerguesiId) REFERENCES Derguesi(PerdoruesiId)
	,CONSTRAINT [Fk_Porosia_Pika_PikaId] FOREIGN KEY (PikaId) REFERENCES Pika(Id)
	)

CREATE TABLE PorosiaDetale (
	Id BIGINT PRIMARY KEY IDENTITY NOT NULL
	,PorosiaId BIGINT NOT NULL
	,ArtikulliId BIGINT NOT NULL
	,Sasia DEC(18, 2) NOT NULL
	,Rabati DEC(18, 2)
	,EkstraRabati DEC(18, 2)
	,Cmimi DEC(18, 3) NOT NULL
	,VleraPerfundimtare DEC(18, 3)
	,CONSTRAINT [Fk_PorosiaDetale_Porosia_PorosiaId] FOREIGN KEY (PorosiaId) REFERENCES Porosia(Id)
	,CONSTRAINT [Fk_PorosiaDetale_Artikulli_ArtikulliId] FOREIGN KEY (ArtikulliId) REFERENCES Artikulli(Id)
	,
	)

CREATE TABLE EkzekutimiPageses (
	Id BIGINT PRIMARY KEY IDENTITY NOT NULL
	,Faturuar DEC(18, 2) NOT NULL
	,Paguar DEC(18, 2) NOT NULL
	,DataRegjistrimit DATETIME
	,PorositesiId BIGINT NOT NULL
	,KorporataId BIGINT NOT NULL
	,MenyraDergesesId INT NOT NULL
	,PorosiaId BIGINT NOT NULL
	,CONSTRAINT [Fk_EkzekutimiPageses_Porositesi_PorositesiId] FOREIGN KEY (PorositesiId) REFERENCES Porositesi(Id)
	,CONSTRAINT [Fk_EkzekutimiPageses_Korporata_KorporataId] FOREIGN KEY (KorporataId) REFERENCES Korporata(Id)
	,CONSTRAINT [Fk_EkzekutimiPageses_MenyraDergeses_MenyraDergesesId] FOREIGN KEY (MenyraDergesesId) REFERENCES MenyraDergeses(Id)
	,CONSTRAINT [Fk_EkzekutimiPageses_Porosia_PorosiaId] FOREIGN KEY (PorosiaId) REFERENCES Porosia(Id)
	,
	)
