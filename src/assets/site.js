export default [
  {
    "id": "100",
    "description": "Площадка, отрисовываемая на карте по координатам",
    "type": "Site",
    "baseType": "Resource",
    "name": "Жуков 55",
    "resourceCharacteristic": [
      {
        "name": "siteAddress",
        "value": "Ленинградская обл., г. Санкт-Петербург, пр. Маршала Жукова, 55"
      },
      {
        "name": "siteNumber",
        "value": "900055"
      },
      {
        "name": "latitude",
        "value": "59.94966856"
      },
      {
        "name": "longitude",
        "value": "30.26677609"
      }
    ],
    "resourceRelationship": [
      {
        "id": "10",
        "relationshipType": "refersTo"
      },
      {
        "id": "101",
        "relationshipType": "refersTo"
      }
    ]
  },
  {
    "id": "101",
    "description": "Базовая станция",
    "type": "BaseStation",
    "name": "Жуков 55-1",
    "resourceCharacteristic": [
      {
        "name": "coverType",
        "value": "OUTDOOR"
      },
      {
        "name": "cabinetType",
        "value": [
          "LTE",
          "3G"
        ]
      }
    ],
    "resourceRelationship": [
      {
        "id": "1",
        "relationshipType": "refersTo"
      },
      {
        "id": "2",
        "relationshipType": "refersTo"
      },
      {
        "id": "3",
        "relationshipType": "refersTo"
      },
      {
        "id": "10",
        "relationshipType": "refersTo"
      },
      {
        "id": "100",
        "relationshipType": "refersTo"
      }
    ]
  },
  {
    "id": "1",
    "name": "Antenna_RAN",
    "description": "Антенна радиодоступа (прямоугольник на АМС). Сектор 1",
    "type": "Antenna_RAN",
    "baseType": "Antenna",
    "resourceCharacteristic": [
      {
        "name": "mountHeight",
        "valueType": "meters",
        "value": "25"
      },
      {
        "name": "tiltAngle",
        "valueType": "degree",
        "value": "3"
      },
      {
        "name": "azimuth",
        "valueType": "degree",
        "value": "150",
        "description": "угол 'зеленой' секции"
      }
    ],
    "resourceRelationship": [
      {
        "id": "101",
        "relationshipType": "refersTo"
      }
    ]
  },
  {
    "id": "2",
    "type": "Antenna_RAN",
    "description": "Антенна радиодоступа (прямоугольник на АМС). Сектор 2",
    "baseType": "Antenna",
    "resourceCharacteristic": [
      {
        "name": "mountHeight",
        "value": "25"
      },
      {
        "name": "tiltAngle",
        "value": "3"
      },
      {
        "name": "azimuth",
        "valueType": "degree",
        "value": "0"
      }
    ],
    "resourceRelationship": [
      {
        "id": "101",
        "relationshipType": "refersTo"
      }
    ]
  },
  {
    "id": "3",
    "type": "Antenna_RAN",
    "description": "Антенна радиодоступа (прямоугольник на АМС). Сектор 3",
    "baseType": "Antenna",
    "resourceCharacteristic": [
      {
        "name": "mountHeight",
        "value": "25"
      },
      {
        "name": "tiltAngle",
        "value": "3"
      },
      {
        "name": "azimuth",
        "valueType": "degree",
        "value": "30"
      }
    ],
    "resourceRelationship": [
      {
        "id": "101",
        "relationshipType": "refersTo"
      }
    ]
  },
  {
    "id": "10",
    "type": "AMC",
    "description": "Антенно-мачтовое сооружение",
    "resourceCharacteristic": [
      {
        "name": "constructionType",
        "value": "REINFORCED_CONCRETE"
      },
      {
        "name": "groundingType",
        "value": "BUILDING"
      },
      {
        "name": "height",
        "value": "30"
      }
    ],
    "resourceRelationship": [
      {
        "id": "100",
        "relationshipType": "refersTo"
      },
      {
        "id": "101",
        "relationshipType": "refersTo"
      }
    ]
  }
]
