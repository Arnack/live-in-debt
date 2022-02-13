import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Table, Th, Thead } from 'reactable';


const revenueTableData =
    [
        {
            "Region": "Алтайский край",
            "Ipotecs": 41415,
            "Money": 83398000000,
            "Dolgi": 1706197,
            "Dengi_Dengi": 14926,
            "Ipotek_voluem": 36317.58706,
            "Ipotek_per_chelovek": 18.03511917
        },
        {
            "Region": "Амурская область",
            "Ipotecs": 10731,
            "Money": 41216000000,
            "Dolgi": 807122,
            "Dengi_Dengi": 6176,
            "Ipotek_voluem": 52716.26382,
            "Ipotek_per_chelovek": 13.72520931
        },
        {
            "Region": "Архангельская область",
            "Ipotecs": 22356,
            "Money": 59556000000,
            "Dolgi": 1349984,
            "Dengi_Dengi": 5952,
            "Ipotek_voluem": 55008.8578,
            "Ipotek_per_chelovek": 20.64910378
        },
        {
            "Region": "Астраханская область",
            "Ipotecs": 12323,
            "Money": 33056000000,
            "Dolgi": 698366,
            "Dengi_Dengi": 9498,
            "Ipotek_voluem": 33129.614,
            "Ipotek_per_chelovek": 12.35044268
        },
        {
            "Region": "Белгородская область",
            "Ipotecs": 19063,
            "Money": 50033000000,
            "Dolgi": 1007872,
            "Dengi_Dengi": 7016,
            "Ipotek_voluem": 32462.42196,
            "Ipotek_per_chelovek": 12.36845981
        },
        {
            "Region": "Брянская область",
            "Ipotecs": 15292,
            "Money": 40351000000,
            "Dolgi": 846030,
            "Dengi_Dengi": 4686,
            "Ipotek_voluem": 34118.21605,
            "Ipotek_per_chelovek": 12.92993383
        },
        {
            "Region": "Владимирская область",
            "Ipotecs": 19977,
            "Money": 50144000000,
            "Dolgi": 1011908,
            "Dengi_Dengi": 11872,
            "Ipotek_voluem": 21748.7101,
            "Ipotek_per_chelovek": 8.6645258
        },
        {
            "Region": "Волгоградская область",
            "Ipotecs": 32679,
            "Money": 80109000000,
            "Dolgi": 1656738,
            "Dengi_Dengi": 19282,
            "Ipotek_voluem": 6330.200197,
            "Ipotek_per_chelovek": 2.582289284
        },
        {
            "Region": "Вологодская область",
            "Ipotecs": 21559,
            "Money": 48848000000,
            "Dolgi": 1004303,
            "Dengi_Dengi": 9034,
            "Ipotek_voluem": 9072.232039,
            "Ipotek_per_chelovek": 4.004017575
        },
        {
            "Region": "Воронежская область",
            "Ipotecs": 38540,
            "Money": 92747000000,
            "Dolgi": 1881740,
            "Dengi_Dengi": 30742,
            "Ipotek_voluem": 181859.7154,
            "Ipotek_per_chelovek": 75.56981286
        },
        {
            "Region": "г. Москва",
            "Ipotecs": 189174,
            "Money": 1257689000000,
            "Dolgi": 22866762,
            "Dengi_Dengi": 324006,
            "Ipotek_voluem": 8036351.438,
            "Ipotek_per_chelovek": 1208.779553
        },
        {
            "Region": "г. Санкт-Петербург",
            "Ipotecs": 121441,
            "Money": 530898000000,
            "Dolgi": 10828864,
            "Dengi_Dengi": 84910,
            "Ipotek_voluem": 503944.527,
            "Ipotek_per_chelovek": 115.2754904
        },
        {
            "Region": "г. Севастополь",
            "Ipotecs": 3215,
            "Money": 10929000000,
            "Dolgi": 174830,
            "Dengi_Dengi": 514,
            "Ipotek_voluem": 11072.58934,
            "Ipotek_per_chelovek": 3.257239887
        },
        {
            "Region": "Еврейская автономная область",
            "Ipotecs": 1688,
            "Money": 4563000000,
            "Dolgi": 100097,
            "Dengi_Dengi": 1644,
            "Ipotek_voluem": 1921.24617,
            "Ipotek_per_chelovek": 0.7107305578
        },
        {
            "Region": "Забайкальский край",
            "Ipotecs": 12433,
            "Money": 40812000000,
            "Dolgi": 798773,
            "Dengi_Dengi": 10728,
            "Ipotek_voluem": 46954.00666,
            "Ipotek_per_chelovek": 14.30410577
        },
        {
            "Region": "Ивановская область",
            "Ipotecs": 11800,
            "Money": 28745000000,
            "Dolgi": 583041,
            "Dengi_Dengi": 7842,
            "Ipotek_voluem": 28219.44113,
            "Ipotek_per_chelovek": 11.58425484
        },
        {
            "Region": "Иркутская область",
            "Ipotecs": 37207,
            "Money": 98279000000,
            "Dolgi": 2107579,
            "Dengi_Dengi": 31578,
            "Ipotek_voluem": 98182.78087,
            "Ipotek_per_chelovek": 37.17057284
        },
        {
            "Region": "Кабардино-Балкарская Республика",
            "Ipotecs": 5674,
            "Money": 14538000000,
            "Dolgi": 328086,
            "Dengi_Dengi": 5800,
            "Ipotek_voluem": 46645.93942,
            "Ipotek_per_chelovek": 18.20532812
        },
        {
            "Region": "Калининградская область",
            "Ipotecs": 17460,
            "Money": 47735000000,
            "Dolgi": 1003531,
            "Dengi_Dengi": 45368,
            "Ipotek_voluem": 102577.1612,
            "Ipotek_per_chelovek": 37.51958174
        },
        {
            "Region": "Калужская область",
            "Ipotecs": 18124,
            "Money": 54447000000,
            "Dolgi": 1177052,
            "Dengi_Dengi": 14690,
            "Ipotek_voluem": 43551.57246,
            "Ipotek_per_chelovek": 14.49719359
        },
        {
            "Region": "Камчатский край",
            "Ipotecs": 12089,
            "Money": 20875000000,
            "Dolgi": 395543,
            "Dengi_Dengi": 2648,
            "Ipotek_voluem": 33218.07127,
            "Ipotek_per_chelovek": 19.23704257
        },
        {
            "Region": "Карачаево-Черкесская Республика",
            "Ipotecs": 4340,
            "Money": 10795000000,
            "Dolgi": 196520,
            "Dengi_Dengi": 11680,
            "Ipotek_voluem": 1899.20842,
            "Ipotek_per_chelovek": 0.7635539177
        },
        {
            "Region": "Кемеровская область",
            "Ipotecs": 48062,
            "Money": 94941000000,
            "Dolgi": 1936345,
            "Dengi_Dengi": 19014,
            "Ipotek_voluem": 33243.8227,
            "Ipotek_per_chelovek": 16.82902652
        },
        {
            "Region": "Кировская область",
            "Ipotecs": 27461,
            "Money": 46154000000,
            "Dolgi": 1048615,
            "Dengi_Dengi": 8156,
            "Ipotek_voluem": 56383.69351,
            "Ipotek_per_chelovek": 33.54752801
        },
        {
            "Region": "Костромская область",
            "Ipotecs": 9457,
            "Money": 21496000000,
            "Dolgi": 437521,
            "Dengi_Dengi": 2858,
            "Ipotek_voluem": 19604.40972,
            "Ipotek_per_chelovek": 8.624809391
        },
        {
            "Region": "Краснодарский край",
            "Ipotecs": 79355,
            "Money": 229024000000,
            "Dolgi": 4740579,
            "Dengi_Dengi": 68558,
            "Ipotek_voluem": 121003.1537,
            "Ipotek_per_chelovek": 41.92663328
        },
        {
            "Region": "Красноярский край",
            "Ipotecs": 49100,
            "Money": 153841000000,
            "Dolgi": 3202329,
            "Dengi_Dengi": 55108,
            "Ipotek_voluem": 136360.6549,
            "Ipotek_per_chelovek": 43.52096097
        },
        {
            "Region": "Курганская область",
            "Ipotecs": 29837,
            "Money": 29120000000,
            "Dolgi": 594393,
            "Dengi_Dengi": 4826,
            "Ipotek_voluem": 209445.1717,
            "Ipotek_per_chelovek": 214.6021836
        },
        {
            "Region": "Курская область",
            "Ipotecs": 14088,
            "Money": 36755000000,
            "Dolgi": 748402,
            "Dengi_Dengi": 6018,
            "Ipotek_voluem": 4768.11374,
            "Ipotek_per_chelovek": 1.827593154
        },
        {
            "Region": "Ленинградская область",
            "Ipotecs": 33433,
            "Money": 119043000000,
            "Dolgi": 2654249,
            "Dengi_Dengi": 20442,
            "Ipotek_voluem": 162435.3222,
            "Ipotek_per_chelovek": 45.61965112
        },
        {
            "Region": "Липецкая область",
            "Ipotecs": 15177,
            "Money": 38270000000,
            "Dolgi": 793895,
            "Dengi_Dengi": 6334,
            "Ipotek_voluem": 862150.5328,
            "Ipotek_per_chelovek": 341.9090315
        },
        {
            "Region": "Магаданская область",
            "Ipotecs": 5188,
            "Money": 13492000000,
            "Dolgi": 252463,
            "Dengi_Dengi": 1588,
            "Ipotek_voluem": 4247.372623,
            "Ipotek_per_chelovek": 1.633217401
        },
        {
            "Region": "Московская область",
            "Ipotecs": 140030,
            "Money": 657945000000,
            "Dolgi": 13737958,
            "Dengi_Dengi": 189488,
            "Ipotek_voluem": 1110615.025,
            "Ipotek_per_chelovek": 236.3714626
        },
        {
            "Region": "Мурманская область",
            "Ipotecs": 13133,
            "Money": 39417000000,
            "Dolgi": 823453,
            "Dengi_Dengi": 5640,
            "Ipotek_voluem": 14149.0741,
            "Ipotek_per_chelovek": 4.714204282
        },
        {
            "Region": "Нижегородская область",
            "Ipotecs": 43358,
            "Money": 125854000000,
            "Dolgi": 2544495,
            "Dengi_Dengi": 25286,
            "Ipotek_voluem": 66111.07463,
            "Ipotek_per_chelovek": 22.77594652
        },
        {
            "Region": "Новгородская область",
            "Ipotecs": 8407,
            "Money": 20668000000,
            "Dolgi": 459855,
            "Dengi_Dengi": 2982,
            "Ipotek_voluem": 10637.62439,
            "Ipotek_per_chelovek": 4.327003497
        },
        {
            "Region": "Новосибирская область",
            "Ipotecs": 55367,
            "Money": 189572000000,
            "Dolgi": 3638991,
            "Dengi_Dengi": 40480,
            "Ipotek_voluem": 261591.9171,
            "Ipotek_per_chelovek": 76.40136556
        },
        {
            "Region": "Омская область",
            "Ipotecs": 28672,
            "Money": 78556000000,
            "Dolgi": 1524807,
            "Dengi_Dengi": 13148,
            "Ipotek_voluem": 60853.76226,
            "Ipotek_per_chelovek": 22.21089505
        },
        {
            "Region": "Оренбургская область",
            "Ipotecs": 36464,
            "Money": 80400000000,
            "Dolgi": 1712183,
            "Dengi_Dengi": 15182,
            "Ipotek_voluem": 31171.71934,
            "Ipotek_per_chelovek": 14.13738276
        },
        {
            "Region": "Орловская область",
            "Ipotecs": 11450,
            "Money": 28616000000,
            "Dolgi": 597326,
            "Dengi_Dengi": 3654,
            "Ipotek_voluem": 15238.75253,
            "Ipotek_per_chelovek": 6.097418103
        },
        {
            "Region": "Пензенская область",
            "Ipotecs": 24977,
            "Money": 55555000000,
            "Dolgi": 1062109,
            "Dengi_Dengi": 7360,
            "Ipotek_voluem": 89568.8667,
            "Ipotek_per_chelovek": 40.2693112
        },
        {
            "Region": "Пермский край",
            "Ipotecs": 45571,
            "Money": 121246000000,
            "Dolgi": 2534784,
            "Dengi_Dengi": 34772,
            "Ipotek_voluem": 261775.9901,
            "Ipotek_per_chelovek": 98.38999756
        },
        {
            "Region": "Приморский край",
            "Ipotecs": 29460,
            "Money": 124440000000,
            "Dolgi": 2037992,
            "Dengi_Dengi": 14194,
            "Ipotek_voluem": 563194.149,
            "Ipotek_per_chelovek": 133.3309196
        },
        {
            "Region": "Псковская область",
            "Ipotecs": 8118,
            "Money": 19003000000,
            "Dolgi": 429550,
            "Dengi_Dengi": 4094,
            "Ipotek_voluem": 4734.432777,
            "Ipotek_per_chelovek": 2.022529353
        },
        {
            "Region": "Республика Адыгея (Адыгея)",
            "Ipotecs": 4065,
            "Money": 10380000000,
            "Dolgi": 242247,
            "Dengi_Dengi": 5258,
            "Ipotek_voluem": 10533.46201,
            "Ipotek_per_chelovek": 4.125098561
        },
        {
            "Region": "Республика Алтай",
            "Ipotecs": 1777,
            "Money": 3794000000,
            "Dolgi": 79754,
            "Dengi_Dengi": 2404,
            "Ipotek_voluem": 1210.862786,
            "Ipotek_per_chelovek": 0.5671331499
        },
        {
            "Region": "Республика Башкортостан",
            "Ipotecs": 69881,
            "Money": 200632000000,
            "Dolgi": 4188332,
            "Dengi_Dengi": 37896,
            "Ipotek_voluem": 389150.5225,
            "Ipotek_per_chelovek": 135.542823
        },
        {
            "Region": "Республика Бурятия",
            "Ipotecs": 14373,
            "Money": 34818000000,
            "Dolgi": 692344,
            "Dengi_Dengi": 10408,
            "Ipotek_voluem": 128963.1978,
            "Ipotek_per_chelovek": 53.23648809
        },
        {
            "Region": "Республика Дагестан",
            "Ipotecs": 10057,
            "Money": 34265000000,
            "Dolgi": 597037,
            "Dengi_Dengi": 11818,
            "Ipotek_voluem": 56257.80902,
            "Ipotek_per_chelovek": 16.51203226
        },
        {
            "Region": "Республика Ингушетия",
            "Ipotecs": 1771,
            "Money": 2009000000,
            "Dolgi": 32345,
            "Dengi_Dengi": 860,
            "Ipotek_voluem": 2469.30272,
            "Ipotek_per_chelovek": 2.176772084
        },
        {
            "Region": "Республика Калмыкия",
            "Ipotecs": 4195,
            "Money": 14003000000,
            "Dolgi": 296747,
            "Dengi_Dengi": 3040,
            "Ipotek_voluem": 7363.8841,
            "Ipotek_per_chelovek": 2.206062544
        },
        {
            "Region": "Республика Карелия",
            "Ipotecs": 10181,
            "Money": 26352000000,
            "Dolgi": 620373,
            "Dengi_Dengi": 3162,
            "Ipotek_voluem": 39020.80754,
            "Ipotek_per_chelovek": 15.07554803
        },
        {
            "Region": "Республика Коми",
            "Ipotecs": 16141,
            "Money": 41927000000,
            "Dolgi": 1021440,
            "Dengi_Dengi": 6766,
            "Ipotek_voluem": 53823.98439,
            "Ipotek_per_chelovek": 20.72108503
        },
        {
            "Region": "Республика Крым",
            "Ipotecs": 10962,
            "Money": 31326000000,
            "Dolgi": 479260,
            "Dengi_Dengi": 1400,
            "Ipotek_voluem": 31901.14576,
            "Ipotek_per_chelovek": 11.16326246
        },
        {
            "Region": "Республика Марий Эл",
            "Ipotecs": 11319,
            "Money": 22507000000,
            "Dolgi": 510686,
            "Dengi_Dengi": 3444,
            "Ipotek_voluem": 32473.04133,
            "Ipotek_per_chelovek": 16.3310239
        },
        {
            "Region": "Республика Мордовия",
            "Ipotecs": 22693,
            "Money": 27556000000,
            "Dolgi": 616895,
            "Dengi_Dengi": 3066,
            "Ipotek_voluem": 7076.309924,
            "Ipotek_per_chelovek": 5.827504032
        },
        {
            "Region": "Республика Саха (Якутия)",
            "Ipotecs": 18960,
            "Money": 82769000000,
            "Dolgi": 1877997,
            "Dengi_Dengi": 21566,
            "Ipotek_voluem": 250535.7662,
            "Ipotek_per_chelovek": 57.3905463
        },
        {
            "Region": "Республика Северная Осетия – Алания",
            "Ipotecs": 6195,
            "Money": 16448000000,
            "Dolgi": 353596,
            "Dengi_Dengi": 14644,
            "Ipotek_voluem": 30915.20123,
            "Ipotek_per_chelovek": 11.64394891
        },
        {
            "Region": "Республика Татарстан (Татарстан)",
            "Ipotecs": 75417,
            "Money": 226481000000,
            "Dolgi": 4376467,
            "Dengi_Dengi": 35716,
            "Ipotek_voluem": 54162.80241,
            "Ipotek_per_chelovek": 18.03593268
        },
        {
            "Region": "Республика Тыва",
            "Ipotecs": 4080,
            "Money": 10620000000,
            "Dolgi": 232969,
            "Dengi_Dengi": 3370,
            "Ipotek_voluem": 9669.8678,
            "Ipotek_per_chelovek": 3.71497746
        },
        {
            "Region": "Республика Хакасия",
            "Ipotecs": 13995,
            "Money": 18862000000,
            "Dolgi": 398230,
            "Dengi_Dengi": 3912,
            "Ipotek_voluem": 5980.031476,
            "Ipotek_per_chelovek": 4.436991862
        },
        {
            "Region": "Ростовская область",
            "Ipotecs": 61059,
            "Money": 154265000000,
            "Dolgi": 3320176,
            "Dengi_Dengi": 41310,
            "Ipotek_voluem": 64408.28838,
            "Ipotek_per_chelovek": 25.49318174
        },
        {
            "Region": "Рязанская область",
            "Ipotecs": 19169,
            "Money": 47810000000,
            "Dolgi": 1097583,
            "Dengi_Dengi": 8178,
            "Ipotek_voluem": 98451.26137,
            "Ipotek_per_chelovek": 39.47316941
        },
        {
            "Region": "Самарская область",
            "Ipotecs": 45919,
            "Money": 115621000000,
            "Dolgi": 2527723,
            "Dengi_Dengi": 33916,
            "Ipotek_voluem": 26950.86114,
            "Ipotek_per_chelovek": 10.70356244
        },
        {
            "Region": "Саратовская область",
            "Ipotecs": 32671,
            "Money": 79043000000,
            "Dolgi": 1675862,
            "Dengi_Dengi": 20892,
            "Ipotek_voluem": 85811.18565,
            "Ipotek_per_chelovek": 35.4685076
        },
        {
            "Region": "Сахалинская область",
            "Ipotecs": 7248,
            "Money": 39669000000,
            "Dolgi": 744282,
            "Dengi_Dengi": 4432,
            "Ipotek_voluem": 14204.04498,
            "Ipotek_per_chelovek": 2.595248633
        },
        {
            "Region": "Свердловская область",
            "Ipotecs": 87844,
            "Money": 226743000000,
            "Dolgi": 4746759,
            "Dengi_Dengi": 51220,
            "Ipotek_voluem": 228015.3255,
            "Ipotek_per_chelovek": 88.33692001
        },
        {
            "Region": "Смоленская область",
            "Ipotecs": 12976,
            "Money": 32532000000,
            "Dolgi": 734571,
            "Dengi_Dengi": 9898,
            "Ipotek_voluem": 26117.13534,
            "Ipotek_per_chelovek": 10.41731059
        },
        {
            "Region": "Ставропольский край",
            "Ipotecs": 31946,
            "Money": 81888000000,
            "Dolgi": 1693367,
            "Dengi_Dengi": 27418,
            "Ipotek_voluem": 76506.60211,
            "Ipotek_per_chelovek": 29.84661869
        },
        {
            "Region": "Тамбовская область",
            "Ipotecs": 11838,
            "Money": 29966000000,
            "Dolgi": 660904,
            "Dengi_Dengi": 4292,
            "Ipotek_voluem": 20678.82811,
            "Ipotek_per_chelovek": 8.169123914
        },
        {
            "Region": "Тверская область",
            "Ipotecs": 19234,
            "Money": 51766000000,
            "Dolgi": 1152083,
            "Dengi_Dengi": 10080,
            "Ipotek_voluem": 13701.76649,
            "Ipotek_per_chelovek": 5.090982048
        },
        {
            "Region": "Томская область",
            "Ipotecs": 15638,
            "Money": 42178000000,
            "Dolgi": 904183,
            "Dengi_Dengi": 5982,
            "Ipotek_voluem": 27328.17196,
            "Ipotek_per_chelovek": 10.13224793
        },
        {
            "Region": "Тульская область",
            "Ipotecs": 21274,
            "Money": 62637000000,
            "Dolgi": 1274050,
            "Dengi_Dengi": 9044,
            "Ipotek_voluem": 41943.783,
            "Ipotek_per_chelovek": 14.24576591
        },
        {
            "Region": "Тюменская область",
            "Ipotecs": 90641,
            "Money": 320517000000,
            "Dolgi": 7246079,
            "Dengi_Dengi": 62910,
            "Ipotek_voluem": 263081.344,
            "Ipotek_per_chelovek": 74.3984129
        },
        {
            "Region": "Удмуртская Республика",
            "Ipotecs": 33532,
            "Money": 78565000000,
            "Dolgi": 1615146,
            "Dengi_Dengi": 10502,
            "Ipotek_voluem": 60382.2686,
            "Ipotek_per_chelovek": 25.77150424
        },
        {
            "Region": "Ульяновская область",
            "Ipotecs": 19530,
            "Money": 45848000000,
            "Dolgi": 988000,
            "Dengi_Dengi": 7264,
            "Ipotek_voluem": 27166.70597,
            "Ipotek_per_chelovek": 11.57227726
        },
        {
            "Region": "Хабаровский край",
            "Ipotecs": 21101,
            "Money": 82683000000,
            "Dolgi": 1579273,
            "Dengi_Dengi": 13318,
            "Ipotek_voluem": 24016.13798,
            "Ipotek_per_chelovek": 6.129005086
        },
        {
            "Region": "Челябинская область",
            "Ipotecs": 55838,
            "Money": 134665000000,
            "Dolgi": 2675036,
            "Dengi_Dengi": 36848,
            "Ipotek_voluem": 89897.0088,
            "Ipotek_per_chelovek": 37.27523244
        },
        {
            "Region": "Чеченская Республика",
            "Ipotecs": 12892,
            "Money": 14003000000,
            "Dolgi": 148865,
            "Dengi_Dengi": 5730,
            "Ipotek_voluem": 11593.08703,
            "Ipotek_per_chelovek": 10.67328987
        },
        {
            "Region": "Чувашская Республика – Чувашия",
            "Ipotecs": 29809,
            "Money": 63765000000,
            "Dolgi": 1391455,
            "Dengi_Dengi": 9584,
            "Ipotek_voluem": 1287479.557,
            "Ipotek_per_chelovek": 601.8737254
        },
        {
            "Region": "Чукотский автономный округ",
            "Ipotecs": 868,
            "Money": 4173000000,
            "Dolgi": 84539,
            "Dengi_Dengi": 236,
            "Ipotek_voluem": 7628.745361,
            "Ipotek_per_chelovek": 1.586808285
        },
        {
            "Region": "Ярославская область",
            "Ipotecs": 18256,
            "Money": 43850000000,
            "Dolgi": 904391,
            "Dengi_Dengi": 13060,
            "Ipotek_voluem": 35322.33951,
            "Ipotek_per_chelovek": 14.70569282
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
                                <Th column="Region">
                                    <span>Регион</span>
                                </Th>
                                <Th column="Ipotecs">
                                    <span>Количество ипотек</span>
                                </Th>
                                <Th column="Money">
                                    <span>Объем ипотек, млн руб</span>
                                </Th>
                                <Th column="Dolgi">
                                    <span>Задолженность по ипотекам, млн руб</span>
                                </Th>
                                <Th column="Dengi_Dengi">
                                    <span>Просроченная задолженность по ипотеке, млн ру</span>
                                </Th>
                                <Th column="Ipotek_voluem">
                                    <span>Объем ипотек на население</span>
                                </Th>
                                <Th column="Ipotek_per_chelovek">
                                    <span>Количество ипотек на тысячу человек</span>
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
