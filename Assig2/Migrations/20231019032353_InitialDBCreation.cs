using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Assig2.Migrations
{
    public partial class InitialDBCreation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Elements",
                columns: table => new
                {
                    elementID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    elementName = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: false),
                    unit = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    imageUrl = table.Column<string>(type: "varchar(500)", unicode: false, maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Elements", x => x.elementID);
                });

            migrationBuilder.CreateTable(
                name: "Items",
                columns: table => new
                {
                    itemID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    itemName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    parentID = table.Column<int>(type: "int", nullable: true),
                    imageUrl = table.Column<string>(type: "varchar(500)", unicode: false, maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Items", x => x.itemID);
                    table.ForeignKey(
                        name: "Items_Parent_FK",
                        column: x => x.parentID,
                        principalTable: "Items",
                        principalColumn: "itemID");
                });

            migrationBuilder.CreateTable(
                name: "MonitorStationTypes",
                columns: table => new
                {
                    stationTypeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    stationType = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    imageUrl = table.Column<string>(type: "varchar(500)", unicode: false, maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("monitorStationTypes_PK", x => x.stationTypeID);
                });

            migrationBuilder.CreateTable(
                name: "Regions",
                columns: table => new
                {
                    regionID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    regionName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    imageUrl = table.Column<string>(type: "varchar(500)", unicode: false, maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Regions", x => x.regionID);
                });

            migrationBuilder.CreateTable(
                name: "ItemElements",
                columns: table => new
                {
                    itemID = table.Column<int>(type: "int", nullable: false),
                    elementID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("itemElements_PK", x => new { x.itemID, x.elementID });
                    table.ForeignKey(
                        name: "itemElements_element_FK",
                        column: x => x.elementID,
                        principalTable: "Elements",
                        principalColumn: "elementID");
                    table.ForeignKey(
                        name: "itemElements_item_FK",
                        column: x => x.itemID,
                        principalTable: "Items",
                        principalColumn: "itemID");
                });

            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    countryID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    iso3 = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: true),
                    countryName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    regionID = table.Column<int>(type: "int", nullable: true),
                    imageUrl = table.Column<string>(type: "varchar(500)", unicode: false, maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.countryID);
                    table.ForeignKey(
                        name: "countries_Region_FK",
                        column: x => x.regionID,
                        principalTable: "Regions",
                        principalColumn: "regionID");
                });

            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    cityID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cityName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    countryID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.cityID);
                    table.ForeignKey(
                        name: "cities_countries_FK",
                        column: x => x.countryID,
                        principalTable: "Countries",
                        principalColumn: "countryID");
                });

            migrationBuilder.CreateTable(
                name: "CountryEmissions",
                columns: table => new
                {
                    ceID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    year = table.Column<int>(type: "int", nullable: false),
                    countryID = table.Column<int>(type: "int", nullable: false),
                    value = table.Column<decimal>(type: "decimal(15,4)", nullable: false),
                    itemID = table.Column<int>(type: "int", nullable: false),
                    elementID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("countryEmissions_PK", x => x.ceID);
                    table.ForeignKey(
                        name: "countryEmissions_country_FK",
                        column: x => x.countryID,
                        principalTable: "Countries",
                        principalColumn: "countryID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "countryEmissions_ItemElement_FK",
                        columns: x => new { x.itemID, x.elementID },
                        principalTable: "ItemElements",
                        principalColumns: new[] { "itemID", "elementID" },
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TemperatureData",
                columns: table => new
                {
                    year = table.Column<int>(type: "int", nullable: false),
                    countryID = table.Column<int>(type: "int", nullable: false),
                    objectID = table.Column<int>(type: "int", nullable: false),
                    unit = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    change = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    value = table.Column<decimal>(type: "decimal(5,3)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("temperatureData_PK", x => new { x.countryID, x.year });
                    table.ForeignKey(
                        name: "temperatureData_Countries_FK",
                        column: x => x.countryID,
                        principalTable: "Countries",
                        principalColumn: "countryID");
                });

            migrationBuilder.CreateTable(
                name: "AirQualityData",
                columns: table => new
                {
                    aqdID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cityID = table.Column<int>(type: "int", nullable: false),
                    year = table.Column<int>(type: "int", nullable: false),
                    rowID = table.Column<int>(type: "int", nullable: true),
                    annualMean = table.Column<int>(type: "int", nullable: true),
                    TemporalCoverage1 = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    annualMeanPM10 = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    annualMean_ugm3 = table.Column<int>(type: "int", nullable: true),
                    TemporalCoverage2 = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    annualMeanPM25 = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    reference = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: true),
                    dbYear = table.Column<int>(type: "int", nullable: true),
                    status = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("AirQualityData_PK", x => x.aqdID);
                    table.ForeignKey(
                        name: "AirQualityData_Cities_FK",
                        column: x => x.cityID,
                        principalTable: "Cities",
                        principalColumn: "cityID");
                });

            migrationBuilder.CreateTable(
                name: "AirQualityStations",
                columns: table => new
                {
                    stationTypeID = table.Column<int>(type: "int", nullable: false),
                    aqdID = table.Column<int>(type: "int", nullable: false),
                    number = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("AirQualityStations_PK", x => new { x.stationTypeID, x.aqdID });
                    table.ForeignKey(
                        name: "AirQualityStations_Data",
                        column: x => x.aqdID,
                        principalTable: "AirQualityData",
                        principalColumn: "aqdID");
                    table.ForeignKey(
                        name: "AirQualityStations_Stations_FK",
                        column: x => x.stationTypeID,
                        principalTable: "MonitorStationTypes",
                        principalColumn: "stationTypeID");
                });

            migrationBuilder.CreateIndex(
                name: "AirQualityData_UK",
                table: "AirQualityData",
                column: "rowID",
                unique: true,
                filter: "[rowID] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AirQualityData_cityID",
                table: "AirQualityData",
                column: "cityID");

            migrationBuilder.CreateIndex(
                name: "IX_AirQualityStations_aqdID",
                table: "AirQualityStations",
                column: "aqdID");

            migrationBuilder.CreateIndex(
                name: "IX_Cities_countryID",
                table: "Cities",
                column: "countryID");

            migrationBuilder.CreateIndex(
                name: "countries_countryName_UK",
                table: "Countries",
                column: "countryName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Countries_regionID",
                table: "Countries",
                column: "regionID");

            migrationBuilder.CreateIndex(
                name: "IX_CountryEmissions_countryID",
                table: "CountryEmissions",
                column: "countryID");

            migrationBuilder.CreateIndex(
                name: "IX_CountryEmissions_itemID_elementID",
                table: "CountryEmissions",
                columns: new[] { "itemID", "elementID" });

            migrationBuilder.CreateIndex(
                name: "Elements_UK",
                table: "Elements",
                column: "elementName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ItemElements_elementID",
                table: "ItemElements",
                column: "elementID");

            migrationBuilder.CreateIndex(
                name: "IX_Items_parentID",
                table: "Items",
                column: "parentID");

            migrationBuilder.CreateIndex(
                name: "monitorStationTypes_UK",
                table: "MonitorStationTypes",
                column: "stationType",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "regions_UK",
                table: "Regions",
                column: "regionName",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AirQualityStations");

            migrationBuilder.DropTable(
                name: "CountryEmissions");

            migrationBuilder.DropTable(
                name: "TemperatureData");

            migrationBuilder.DropTable(
                name: "AirQualityData");

            migrationBuilder.DropTable(
                name: "MonitorStationTypes");

            migrationBuilder.DropTable(
                name: "ItemElements");

            migrationBuilder.DropTable(
                name: "Cities");

            migrationBuilder.DropTable(
                name: "Elements");

            migrationBuilder.DropTable(
                name: "Items");

            migrationBuilder.DropTable(
                name: "Countries");

            migrationBuilder.DropTable(
                name: "Regions");
        }
    }
}
