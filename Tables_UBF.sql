CREATE TABLE Adresa(
	Id bigint PRIMARY KEY IDENTITY(100,25) NOT NULL,
	X decimal(18,12),
	Y decimal(18,12),
	Z decimal(18,12),
)

CREATE TABLE Perdoruesi(
	Id bigint PRIMARY KEY IDENTITY(100,25) NOT NULL,
	Emri varchar(255) NOT NULL,
	Mbiemri varchar(255) NOT NULL,
	Email varchar(255) NOT NULL,
	AdresaId bigint NOT NULL,
	CONSTRAINT[FK_Perdoruesi_Adresa_AdresaId] FOREIGN KEY(AdresaId) REFERENCES Adresa(Id)
)

CREATE TABLE MenyraPageses(
	Id int PRIMARY KEY IDENTITY NOT NULL,
	Pershkrimi varchar(255) NOT NULL
)

CREATE TABLE Porositesi(
	Id bigint PRIMARY KEY IDENTITY(100,25) NOT NULL,
	PerdoruesiId bigint NOT NULL,
	MenyraPagesesId int NOT NULL,
	CONSTRAINT[FK_Porositesi_Perdoruesi_PerdoruesiId] FOREIGN KEY(PerdoruesiId) REFERENCES Perdoruesi(Id),
	CONSTRAINT[FK_Porositesi_MenyraPageses_MenyraPagesesId] FOREIGN KEY(MenyraPagesesId) REFERENCES MenyraPageses(Id)
)
CREATE TABLE MenyraDergeses(
	Id int PRIMARY KEY IDENTITY NOT NULL,
	Pershkrimi varchar(255) NOT NULL
)

CREATE TABLE Derguesi(
	Id bigint PRIMARY KEY IDENTITY(100,25) NOT NULL,
	PerdoruesiId bigint NOT NULL,
	MenyraDergesesId int NOT NULL,
	Rating decimal(18,2),
	CONSTRAINT[FK_Derguesi_Perdoruesi_PerdoruesiId] FOREIGN KEY(PerdoruesiId) REFERENCES Perdoruesi(Id),
	CONSTRAINT[FK_Derguesi_MenyraDergeses_MenyraDergesesId] FOREIGN KEY(MenyraDergesesId) REFERENCES MenyraDergeses(Id)
)

CREATE TABLE Korporata(
	Id bigint PRIMARY KEY IDENTITY(100,25) NOT NULL,
	Pershkrimi varchar(255) NOT NULL,
	Email varchar(255) NOT NULL,
	NrTelefonit varchar(255) NOT NULL,
	LimitiPikave int,
	Komuna varchar(255) NOT NULL,
)

CREATE TABLE Artikulli(
	Id bigint PRIMARY KEY IDENTITY(100,25) NOT NULL,
	Pershkrimi varchar(255) NOT NULL,
	Cmimi decimal(18,2),
)

CREATE TABLE Menu(
	Id int PRIMARY KEY IDENTITY NOT NULL,
	Pershkrimi varchar(255) NOT NULL
)

CREATE TABLE ArtikujtMenus(
	Id bigint PRIMARY KEY IDENTITY(10,25) NOT NULL,
	ArtikulliId bigint NOT NULL,
	MenuId int NOT NULL,
	CONSTRAINT[Fk_ArtikujtMenus_Artikulli_AritikulliId] FOREIGN KEY(ArtikulliId) REFERENCES Artikulli(Id),
	CONSTRAINT[Fk_ArtikujtMenus_Menu_MenuId] FOREIGN KEY(MenuId) REFERENCES Menu(Id)
)

CREATE TABLE Pika(
	Id int PRIMARY KEY IDENTITY NOT NULL,
	KorporataId bigint not null,
	Pershkrimi varchar(255) NOT NULL,
	AdresaId bigint NOT NULL,
	NrTelefonit varchar(255) NOT NULL,
	MenuId int NOT NULL,
	CONSTRAINT[Fk_Pika_Korporata_KorporataId] FOREIGN KEY(KorporataId) REFERENCES Korporata(Id),
	CONSTRAINT[Fk_Pika_Adresa_AdresaId] FOREIGN KEY(AdresaId) REFERENCES Adresa(Id),
	CONSTRAINT[Fk_Pika_Menu_MenuId] FOREIGN KEY(MenuId) REFERENCES Menu(Id),
)

CREATE TABLE Orari(
	Id int PRIMARY KEY IDENTITY NOT NULL,
	OraHapjes datetime NOT NULL,
	OraMbylljes datetime NOT NULL,
	Mbyllur bit NOT NULL,
	DitaId tinyint NOT NULL,
	PikaId int NOT NULL,
	CONSTRAINT[Fk_Orari_Pika_PikaId] FOREIGN KEY(PikaId) REFERENCES Pika(Id)
)
create table Porosia(
   Id bigint Primary key IDENTITY not null,
   PorositesiId bigint not null,
   DataERegjistrimit datetime ,
   DerguesiID bigint not null,
   PikaID int not null,
   DataEPerfundimit datetime,
   DataEMarrjesNgaDerguesi datetime,
   DataEPranimit datetime,
   Komenti varchar(255),
   AdresaSekondare bigint,
   Anuluar bit ,
   CONSTRAINT[Fk_Porosia_Porositesi_PorositesiId] FOREIGN KEY(PorositesiId) REFERENCES Porositesi(Id),
   CONSTRAINT[Fk_Porosia_Derguesi_DerguesiId] FOREIGN KEY(DerguesiId) REFERENCES Derguesi(Id),
   CONSTRAINT[Fk_Porosia_Pika_PikaId] FOREIGN KEY(PikaId) REFERENCES Pika(Id),
)
Create table PorosiaDetale(
	Id bigint Primary key IDENTITY not null,
	PorosiaId bigint not null,
	ArtikulliId bigint not null,
	Sasia dec(18,2) not null,
	Rabati dec(18,2),
	EkstraRabati dec(18,2),
	Cmimi dec (18,3) not null,
	VleraPerfundimtare dec(18,3),
	CONSTRAINT[Fk_PorosiaDetale_Porosia_PorosiaId] FOREIGN KEY(PorosiaId) REFERENCES Porosia(Id),
	CONSTRAINT[Fk_PorosiaDetale_Artikulli_ArtikulliId] FOREIGN KEY(ArtikulliId) REFERENCES Artikulli(Id),
)

Create table EkzekutimiPageses(
	Id bigint primary key IDENTITY not null,
	Faturuar dec(18,2) not null,
	Paguar dec(18,2) not null,
	DataRegjistrimit datetime,
	PorositesiId bigint not null,
	KorporataId bigint not null,
	MenyraDergesesId int not null,
	PorosiaId bigint not null,
	CONSTRAINT[Fk_EkzekutimiPageses_Porositesi_PorositesiId] FOREIGN KEY(PorositesiId) REFERENCES Porositesi(Id),
	CONSTRAINT[Fk_EkzekutimiPageses_Korporata_KorporataId] FOREIGN KEY(KorporataId) REFERENCES Korporata(Id),
	CONSTRAINT[Fk_EkzekutimiPageses_MenyraDergeses_MenyraDergesesId] FOREIGN KEY(MenyraDergesesId) REFERENCES MenyraDergeses(Id),
	CONSTRAINT[Fk_EkzekutimiPageses_Porosia_PorosiaId] FOREIGN KEY(PorosiaId) REFERENCES Porosia(Id),
)
