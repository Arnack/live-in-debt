import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Table, Th, Thead } from 'reactable';


const revenueTableData =
[
    {
        "reg": "Алтайский край",
        "number": 41415,
        "volume": 83398,
        "interest": "7,62",
        "debt": 1706197,
        "baddebt": 14926,
        "bold": 2291,
        "population": 2296353,
        "salary": 32299,
        "Region": "ru-al"
    },
    {
        "reg": "Амурская область",
        "number": 10731,
        "volume": 41216,
        "interest": "6,48",
        "debt": 807122,
        "baddebt": 6176,
        "bold": 1172,
        "population": 781846,
        "salary": 57547,
        "Region": "ru-am"
    },
    {
        "reg": "Архангельская область",
        "number": 22356,
        "volume": 59556,
        "interest": "7,55",
        "debt": 1349984,
        "baddebt": 5952,
        "bold": 1318,
        "population": 1082662,
        "salary": 58115,
        "Region": "ru-ar"
    },
    {
        "reg": "Астраханская область",
        "number": 12323,
        "volume": 33056,
        "interest": "7,5",
        "debt": 698366,
        "baddebt": 9498,
        "bold": 1275,
        "population": 997778,
        "salary": 39794,
        "Region": "ru-as"
    },
    {
        "reg": "Белгородская область",
        "number": 19063,
        "volume": 50033,
        "interest": "7,41",
        "debt": 1007872,
        "baddebt": 7016,
        "bold": 3448,
        "population": 1541259,
        "salary": 40322,
        "Region": "ru-bl"
    },
    {
        "reg": "Брянская область",
        "number": 15292,
        "volume": 40351,
        "interest": "7,27",
        "debt": 846030,
        "baddebt": 4686,
        "bold": 1624,
        "population": 1182682,
        "salary": 35233,
        "Region": "ru-br"
    },
    {
        "reg": "в том числе Ненецкий автономный округ",
        "number": 712,
        "volume": 2273,
        "interest": "7,64",
        "debt": 64462,
        "baddebt": 238,
        "bold": 1,
        "population": 1342099,
        "salary": 92484,
        "Region": "ru-nn"
    },
    {
        "reg": "в том числе Ханты-Мансийский\nавтономный округ – Югра",
        "number": 42102,
        "volume": 152878,
        "interest": "7,69",
        "debt": 3748819,
        "baddebt": 33124,
        "bold": 2297,
        "population": 2474556,
        "salary": 37154,
        "Region": "ru-km"
    },
    {
        "reg": "в том числе Ямало-Ненецкий\nавтономный округ",
        "number": 22164,
        "volume": 59370,
        "interest": "7,7",
        "debt": 1392477,
        "baddebt": 16970,
        "bold": 485,
        "population": 1151042,
        "salary": 37268,
        "Region": "ru-yn"
    },
    {
        "reg": "Владимирская область",
        "number": 19977,
        "volume": 50144,
        "interest": "7,58",
        "debt": 1011908,
        "baddebt": 11872,
        "bold": 1409,
        "population": 2305608,
        "salary": 44311,
        "Region": "ru-vl"
    },
    {
        "reg": "Волгоградская область",
        "number": 32679,
        "volume": 80109,
        "interest": "7,5",
        "debt": 1656738,
        "baddebt": 19282,
        "bold": 5060,
        "population": 12655050,
        "salary": 40105,
        "Region": "ru-vg"
    },
    {
        "reg": "Вологодская область",
        "number": 21559,
        "volume": 48848,
        "interest": "7,64",
        "debt": 1004303,
        "baddebt": 9034,
        "bold": 2294,
        "population": 5384342,
        "salary": 104877,
        "Region": "ru-vo"
    },
    {
        "reg": "Воронежская область",
        "number": 38540,
        "volume": 92747,
        "interest": "7,32",
        "debt": 1881740,
        "baddebt": 30742,
        "bold": 1872,
        "population": 509992,
        "salary": 73944,
        "Region": "ru-vr"
    },
    {
        "reg": "г. Москва",
        "number": 189174,
        "volume": 1257689,
        "interest": "7,65",
        "debt": 22866762,
        "baddebt": 324006,
        "bold": 10213,
        "population": 156500,
        "salary": 38047,
        "Region": "ru-ms"
    },
    {
        "reg": "г. Санкт-Петербург",
        "number": 121441,
        "volume": 530898,
        "interest": "7,29",
        "debt": 10828864,
        "baddebt": 84910,
        "bold": 8185,
        "population": 1053485,
        "salary": 48891,
        "Region": "ru-sp"
    },
    {
        "reg": "г. Севастополь",
        "number": 3215,
        "volume": 10929,
        "interest": "8,12",
        "debt": 174830,
        "baddebt": 514,
        "bold": 185,
        "population": 987032,
        "salary": 47554,
        "Region": "ru-sc"
    },
    {
        "reg": "Еврейская автономная область",
        "number": 1688,
        "volume": 4563,
        "interest": "7,01",
        "debt": 100097,
        "baddebt": 1644,
        "bold": 140,
        "population": 2375021,
        "salary": 30724,
        "Region": "ru-yv"
    },
    {
        "reg": "Забайкальский край",
        "number": 12433,
        "volume": 40812,
        "interest": "6,86",
        "debt": 798773,
        "baddebt": 10728,
        "bold": 863,
        "population": 869191,
        "salary": 51888,
        "Region": "ru-ct"
    },
    {
        "reg": "Ивановская область",
        "number": 11800,
        "volume": 28745,
        "interest": "7,62",
        "debt": 583041,
        "baddebt": 7842,
        "bold": 2065,
        "population": 1018624,
        "salary": 30500,
        "Region": "ru-iv"
    },
    {
        "reg": "Иркутская область",
        "number": 37207,
        "volume": 98279,
        "interest": "7,86",
        "debt": 2107579,
        "baddebt": 31578,
        "bold": 2565,
        "population": 1000980,
        "salary": 40119,
        "Region": "ru-ir"
    },
    {
        "reg": "Кабардино-Балкарская Республика",
        "number": 5674,
        "volume": 14538,
        "interest": "7,41",
        "debt": 328086,
        "baddebt": 5800,
        "bold": 490,
        "population": 311667,
        "salary": 47383,
        "Region": "ru-kb"
    },
    {
        "reg": "Калининградская область",
        "number": 17460,
        "volume": 47735,
        "interest": "7,36",
        "debt": 1003531,
        "baddebt": 45368,
        "bold": 1897,
        "population": 465357,
        "salary": 88379,
        "Region": "ru-kn"
    },
    {
        "reg": "Калужская область",
        "number": 18124,
        "volume": 54447,
        "interest": "7,51",
        "debt": 1177052,
        "baddebt": 14690,
        "bold": 2099,
        "population": 1250173,
        "salary": 31128,
        "Region": "ru-kg"
    },
    {
        "reg": "Камчатский край",
        "number": 12089,
        "volume": 20875,
        "interest": "7,72",
        "debt": 395543,
        "baddebt": 2648,
        "bold": 345,
        "population": 628423,
        "salary": 47200,
        "Region": "ru-ka"
    },
    {
        "reg": "Карачаево-Черкесская Республика",
        "number": 4340,
        "volume": 10795,
        "interest": "7,44",
        "debt": 196520,
        "baddebt": 11680,
        "bold": 281,
        "population": 5683947,
        "salary": 34972,
        "Region": "ru-kc"
    },
    {
        "reg": "Кемеровская область",
        "number": 48062,
        "volume": 94941,
        "interest": "7,77",
        "debt": 1936345,
        "baddebt": 19014,
        "bold": 2304,
        "population": 2855899,
        "salary": 34054,
        "Region": "ru-ke"
    },
    {
        "reg": "Кировская область",
        "number": 27461,
        "volume": 46154,
        "interest": "7,61",
        "debt": 1048615,
        "baddebt": 8156,
        "bold": 1002,
        "population": 818570,
        "salary": 39682,
        "Region": "ru-kv"
    },
    {
        "reg": "Костромская область",
        "number": 9457,
        "volume": 21496,
        "interest": "7,52",
        "debt": 437521,
        "baddebt": 2858,
        "bold": 739,
        "population": 1096488,
        "salary": 58072,
        "Region": "ru-kt"
    },
    {
        "reg": "Краснодарский край",
        "number": 79355,
        "volume": 229024,
        "interest": "7,73",
        "debt": 4740579,
        "baddebt": 68558,
        "bold": 9757,
        "population": 1892711,
        "salary": 34314,
        "Region": "ru-kd"
    },
    {
        "reg": "Красноярский край",
        "number": 49100,
        "volume": 153841,
        "interest": "7,73",
        "debt": 3202329,
        "baddebt": 55108,
        "bold": 1878,
        "population": 1128192,
        "salary": 39463,
        "Region": "ru-ky"
    },
    {
        "reg": "Курганская область",
        "number": 29837,
        "volume": 29120,
        "interest": "7,5",
        "debt": 594393,
        "baddebt": 4826,
        "bold": 1224,
        "population": 139034,
        "salary": 51961,
        "Region": "ru-ku"
    },
    {
        "reg": "Курская область",
        "number": 14088,
        "volume": 36755,
        "interest": "7,37",
        "debt": 748402,
        "baddebt": 6018,
        "bold": 1586,
        "population": 7708499,
        "salary": 39373,
        "Region": "ru-ks"
    },
    {
        "reg": "Ленинградская область",
        "number": 33433,
        "volume": 119043,
        "interest": "7,3",
        "debt": 2654249,
        "baddebt": 20442,
        "bold": 894,
        "population": 732864,
        "salary": 100123,
        "Region": "ru-ln"
    },
    {
        "reg": "Липецкая область",
        "number": 15177,
        "volume": 38270,
        "interest": "7,37",
        "debt": 793895,
        "baddebt": 6334,
        "bold": 1977,
        "population": 44389,
        "salary": 62274,
        "Region": "ru-lp"
    },
    {
        "reg": "Магаданская область",
        "number": 5188,
        "volume": 13492,
        "interest": "6,19",
        "debt": 252463,
        "baddebt": 1588,
        "bold": 127,
        "population": 3176552,
        "salary": 73502,
        "Region": "ru-mg"
    },
    {
        "reg": "Московская область",
        "number": 140030,
        "volume": 657945,
        "interest": "7,59",
        "debt": 13737958,
        "baddebt": 189488,
        "bold": 10045,
        "population": 592415,
        "salary": 40163,
        "Region": "ru-2509"
    },
    {
        "reg": "Мурманская область",
        "number": 13133,
        "volume": 39417,
        "interest": "7,46",
        "debt": 823453,
        "baddebt": 5640,
        "bold": 670,
        "population": 2785836,
        "salary": 39539,
        "Region": "ru-mm"
    },
    {
        "reg": "Нижегородская область",
        "number": 43358,
        "volume": 125854,
        "interest": "7,56",
        "debt": 2544495,
        "baddebt": 25286,
        "bold": 4323,
        "population": 1903675,
        "salary": 44640,
        "Region": "ru-nz"
    },
    {
        "reg": "Новгородская область",
        "number": 8407,
        "volume": 20668,
        "interest": "7,41",
        "debt": 459855,
        "baddebt": 2982,
        "bold": 495,
        "population": 1942915,
        "salary": 39170,
        "Region": "ru-ng"
    },
    {
        "reg": "Новосибирская область",
        "number": 55367,
        "volume": 189572,
        "interest": "7,49",
        "debt": 3638991,
        "baddebt": 40480,
        "bold": 4918,
        "population": 724686,
        "salary": 36958,
        "Region": "ru-ns"
    },
    {
        "reg": "Омская область",
        "number": 28672,
        "volume": 78556,
        "interest": "7,77",
        "debt": 1524807,
        "baddebt": 13148,
        "bold": 3528,
        "population": 1290898,
        "salary": 34278,
        "Region": "ru-om"
    },
    {
        "reg": "Оренбургская область",
        "number": 36464,
        "volume": 80400,
        "interest": "7,58",
        "debt": 1712183,
        "baddebt": 15182,
        "bold": 2982,
        "population": 2579261,
        "salary": 35247,
        "Region": "ru-ob"
    },
    {
        "reg": "Орловская область",
        "number": 11450,
        "volume": 28616,
        "interest": "7,38",
        "debt": 597326,
        "baddebt": 3654,
        "bold": 610,
        "population": 1877844,
        "salary": 43842,
        "Region": "ru-ol"
    },
    {
        "reg": "Пензенская область",
        "number": 24977,
        "volume": 55555,
        "interest": "7,03",
        "debt": 1062109,
        "baddebt": 7360,
        "bold": 3000,
        "population": 620249,
        "salary": 53868,
        "Region": "ru-pz"
    },
    {
        "reg": "Пермский край",
        "number": 45571,
        "volume": 121246,
        "interest": "7,57",
        "debt": 2534784,
        "baddebt": 34772,
        "bold": 3222,
        "population": 463167,
        "salary": 34367,
        "Region": "ru-pe"
    },
    {
        "reg": "Приморский край",
        "number": 29460,
        "volume": 124440,
        "interest": "6,12",
        "debt": 2037992,
        "baddebt": 14194,
        "bold": 2323,
        "population": 220954,
        "salary": 34186,
        "Region": "ru-pr"
    },
    {
        "reg": "Псковская область",
        "number": 8118,
        "volume": 19003,
        "interest": "7,29",
        "debt": 429550,
        "baddebt": 4094,
        "bold": 808,
        "population": 4013786,
        "salary": 36666,
        "Region": "ru-ps"
    },
    {
        "reg": "Республика Адыгея (Адыгея)",
        "number": 4065,
        "volume": 10380,
        "interest": "7,53",
        "debt": 242247,
        "baddebt": 5258,
        "bold": 722,
        "population": 985431,
        "salary": 40709,
        "Region": "ru-ad"
    },
    {
        "reg": "Республика Алтай",
        "number": 1777,
        "volume": 3794,
        "interest": "7,63",
        "debt": 79754,
        "baddebt": 2404,
        "bold": 201,
        "population": 3133303,
        "salary": 43386,
        "Region": "ru-ga"
    },
    {
        "reg": "Республика Башкортостан",
        "number": 69881,
        "volume": 200632,
        "interest": "7,62",
        "debt": 4188332,
        "baddebt": 37896,
        "bold": 7477,
        "population": 515564,
        "salary": 30708,
        "Region": "ru-bk"
    },
    {
        "reg": "Республика Бурятия",
        "number": 14373,
        "volume": 34818,
        "interest": "6,78",
        "debt": 692344,
        "baddebt": 10408,
        "bold": 1039,
        "population": 269984,
        "salary": 30479,
        "Region": "ru-mg"
    },
    {
        "reg": "Республика Дагестан",
        "number": 10057,
        "volume": 34265,
        "interest": "7,6",
        "debt": 597037,
        "baddebt": 11818,
        "bold": 579,
        "population": 609071,
        "salary": 32313,
        "Region": "ru-da"
    },
    {
        "reg": "Республика Ингушетия",
        "number": 1771,
        "volume": 2009,
        "interest": "8,32",
        "debt": 32345,
        "baddebt": 860,
        "bold": 122,
        "population": 813590,
        "salary": 47699,
        "Region": "ru-in"
    },
    {
        "reg": "Республика Калмыкия",
        "number": 4195,
        "volume": 14003,
        "interest": "7,39",
        "debt": 296747,
        "baddebt": 3040,
        "bold": 597,
        "population": 1901578,
        "salary": 56516,
        "Region": "ru-kl"
    },
    {
        "reg": "Республика Карелия",
        "number": 10181,
        "volume": 26352,
        "interest": "7,43",
        "debt": 620373,
        "baddebt": 3162,
        "bold": 760,
        "population": 675332,
        "salary": 37480,
        "Region": "ru-ki"
    },
    {
        "reg": "Республика Коми",
        "number": 16141,
        "volume": 41927,
        "interest": "7,6",
        "debt": 1021440,
        "baddebt": 6766,
        "bold": 825,
        "population": 778965,
        "salary": 33920,
        "Region": "ru-ko"
    },
    {
        "reg": "Республика Крым",
        "number": 10962,
        "volume": 31326,
        "interest": "7,95",
        "debt": 479260,
        "baddebt": 1400,
        "bold": 472,
        "population": 981971,
        "salary": 33693,
        "Region": "ru-kr"
    },
    {
        "reg": "Республика Марий Эл",
        "number": 11319,
        "volume": 22507,
        "interest": "7,34",
        "debt": 510686,
        "baddebt": 3444,
        "bold": 573,
        "population": 693098,
        "salary": 78782,
        "Region": "ru-me"
    },
    {
        "reg": "Республика Мордовия",
        "number": 22693,
        "volume": 27556,
        "interest": "7,12",
        "debt": 616895,
        "baddebt": 3066,
        "bold": 1006,
        "population": 3894120,
        "salary": 30820,
        "Region": "ru-mr"
    },
    {
        "reg": "Республика Саха (Якутия)",
        "number": 18960,
        "volume": 82769,
        "interest": "6,27",
        "debt": 1877997,
        "baddebt": 21566,
        "bold": 1276,
        "population": 330368,
        "salary": 44212,
        "Region": "ru-ck"
    },
    {
        "reg": "Республика Северная Осетия – Алания",
        "number": 6195,
        "volume": 16448,
        "interest": "7,36",
        "debt": 353596,
        "baddebt": 14644,
        "bold": 808,
        "population": 532036,
        "salary": 44244,
        "Region": "ru-no"
    },
    {
        "reg": "Республика Татарстан (Татарстан)",
        "number": 75417,
        "volume": 226481,
        "interest": "7,39",
        "debt": 4376467,
        "baddebt": 35716,
        "bold": 4970,
        "population": 4181486,
        "salary": 46241,
        "Region": "ru-tt"
    },
    {
        "reg": "Республика Тыва",
        "number": 4080,
        "volume": 10620,
        "interest": "8,08",
        "debt": 232969,
        "baddebt": 3370,
        "bold": 140,
        "population": 1098257,
        "salary": 38544,
        "Region": "ru-tu"
    },
    {
        "reg": "Республика Хакасия",
        "number": 13995,
        "volume": 18862,
        "interest": "7,54",
        "debt": 398230,
        "baddebt": 3912,
        "bold": 477,
        "population": 3154164,
        "salary": 39582,
        "Region": "ru-kk"
    },
    {
        "reg": "Ростовская область",
        "number": 61059,
        "volume": 154265,
        "interest": "7,49",
        "debt": 3320176,
        "baddebt": 41310,
        "bold": 5989,
        "population": 2395111,
        "salary": 41675,
        "Region": "ru-ro"
    },
    {
        "reg": "Рязанская область",
        "number": 19169,
        "volume": 47810,
        "interest": "7,37",
        "debt": 1097583,
        "baddebt": 8178,
        "bold": 1316,
        "population": 485621,
        "salary": 36636,
        "Region": "ru-rz"
    },
    {
        "reg": "Самарская область",
        "number": 45919,
        "volume": 115621,
        "interest": "7,78",
        "debt": 2527723,
        "baddebt": 33916,
        "bold": 7946,
        "population": 4290067,
        "salary": 91886,
        "Region": "ru-sa"
    },
    {
        "reg": "Саратовская область",
        "number": 32671,
        "volume": 79043,
        "interest": "7,72",
        "debt": 1675862,
        "baddebt": 20892,
        "bold": 4631,
        "population": 921127,
        "salary": 47862,
        "Region": "ru-sr"
    },
    {
        "reg": "Сахалинская область",
        "number": 7248,
        "volume": 39669,
        "interest": "6,38",
        "debt": 744282,
        "baddebt": 4432,
        "bold": 331,
        "population": 2792796,
        "salary": 35323,
        "Region": "ru-sl"
    },
    {
        "reg": "Свердловская область",
        "number": 87844,
        "volume": 226743,
        "interest": "7,56",
        "debt": 4746759,
        "baddebt": 51220,
        "bold": 7895,
        "population": 994420,
        "salary": 36151,
        "Region": "ru-sv"
    },
    {
        "reg": "Смоленская область",
        "number": 12976,
        "volume": 32532,
        "interest": "7,45",
        "debt": 734571,
        "baddebt": 9898,
        "bold": 866,
        "population": 1245619,
        "salary": 33097,
        "Region": "ru-sm"
    },
    {
        "reg": "Ставропольский край",
        "number": 31946,
        "volume": 81888,
        "interest": "7,5",
        "debt": 1693367,
        "baddebt": 27418,
        "bold": 3916,
        "population": 1070339,
        "salary": 39498,
        "Region": "ru-st"
    },
    {
        "reg": "Тамбовская область",
        "number": 11838,
        "volume": 29966,
        "interest": "7,47",
        "debt": 660904,
        "baddebt": 4292,
        "bold": 1080,
        "population": 1449115,
        "salary": 48320,
        "Region": "ru-tb"
    },
    {
        "reg": "Тверская область",
        "number": 19234,
        "volume": 51766,
        "interest": "7,64",
        "debt": 1152083,
        "baddebt": 10080,
        "bold": 1388,
        "population": 3778053,
        "salary": 43241,
        "Region": "ru-tv"
    },
    {
        "reg": "Томская область",
        "number": 15638,
        "volume": 42178,
        "interest": "7,64",
        "debt": 904183,
        "baddebt": 5982,
        "bold": 1379,
        "population": 1543389,
        "salary": 80796,
        "Region": "ru-to"
    },
    {
        "reg": "Тульская область",
        "number": 21274,
        "volume": 62637,
        "interest": "7,6",
        "debt": 1274050,
        "baddebt": 9044,
        "bold": 2796,
        "population": 1493356,
        "salary": 37395,
        "Region": "ru-tl"
    },
    {
        "reg": "Тюменская область",
        "number": 90641,
        "volume": 320517,
        "interest": "7,57",
        "debt": 7246079,
        "baddebt": 62910,
        "bold": 2535,
        "population": 1218319,
        "salary": 35185,
        "Region": "ru-ty"
    },
    {
        "reg": "Удмуртская Республика",
        "number": 33532,
        "volume": 78565,
        "interest": "7,14",
        "debt": 1615146,
        "baddebt": 10502,
        "bold": 2157,
        "population": 1301127,
        "salary": 58498,
        "Region": "ru-ud"
    },
    {
        "reg": "Ульяновская область",
        "number": 19530,
        "volume": 45848,
        "interest": "7,47",
        "debt": 988000,
        "baddebt": 7264,
        "bold": 3142,
        "population": 1687654,
        "salary": 80614,
        "Region": "ru-ul"
    },
    {
        "reg": "Хабаровский край",
        "number": 21101,
        "volume": 82683,
        "interest": "6,93",
        "debt": 1579273,
        "baddebt": 13318,
        "bold": 2038,
        "population": 3442810,
        "salary": 43001,
        "Region": "ru-kh"
    },
    {
        "reg": "Челябинская область",
        "number": 55838,
        "volume": 134665,
        "interest": "7,65",
        "debt": 2675036,
        "baddebt": 36848,
        "bold": 5916,
        "population": 1497992,
        "salary": 29712,
        "Region": "ru-cl"
    },
    {
        "reg": "Чеченская Республика",
        "number": 12892,
        "volume": 14003,
        "interest": "8,21",
        "debt": 148865,
        "baddebt": 5730,
        "bold": 158,
        "population": 1207875,
        "salary": 34408,
        "Region": "ru-cn"
    },
    {
        "reg": "Чувашская Республика – Чувашия",
        "number": 29809,
        "volume": 63765,
        "interest": "7,2",
        "debt": 1391455,
        "baddebt": 9584,
        "bold": 1330,
        "population": 49527,
        "salary": 124340,
        "Region": "ru-cv"
    },
    {
        "reg": "Чукотский автономный округ",
        "number": 868,
        "volume": 4173,
        "interest": "6,34",
        "debt": 84539,
        "baddebt": 236,
        "bold": 17,
        "population": 547010,
        "salary": 109693,
        "Region": "ru-2485"
    },
    {
        "reg": "Ярославская область",
        "number": 18256,
        "volume": 43850,
        "interest": "7,53",
        "debt": 904391,
        "baddebt": 13060,
        "bold": 1690,
        "population": 1241424,
        "salary": 40954,
        "Region": "ru-ys"
    }
]

export default function GeneralTable() {
    return (
        <>
            <br/>
            <br/>
            <br/>
<Card>
                        <Table
                            style={{maxHeight: "400px", overflowY: "auto"}}
                            className="table"
                            data={revenueTableData}

                            itemsPerPage={8}
                            pageButtonLimit={5}
                            sortable={true}>
                            <Thead>
                                <Th column="reg">
                                    <span>Регион</span>
                                </Th>
                                <Th column="number">
                                    <span>Количество кредитов</span>
                                </Th>
                                <Th column="baddebt">
                                    <span>Количество просроченных кредитов</span>
                                </Th>
                                <Th column="bold">
                                    <span>Банкротства</span>
                                </Th>
                                <Th column="population">
                                    <span>Население региона</span>
                                </Th>
                                <Th column="salary">
                                    <span>Средняя зарплата по региону</span>
                                </Th>
                            </Thead>
                        </Table>
</Card>
            <br/>
            <br/>
            <br/>
            <br/>
            </>
    );
}
