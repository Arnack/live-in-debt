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
            "Ipotek_voluem": 37362.37044,
            "Ipotek_per_chelovek": 14.88489299
        },
        {
            "Region": "Волгоградская область",
            "Ipotecs": 32679,
            "Money": 80109000000,
            "Dolgi": 1656738,
            "Dengi_Dengi": 19282,
            "Ipotek_voluem": 32373.08026,
            "Ipotek_per_chelovek": 13.20600544
        },
        {
            "Region": "Вологодская область",
            "Ipotecs": 21559,
            "Money": 48848000000,
            "Dolgi": 1004303,
            "Dengi_Dengi": 9034,
            "Ipotek_voluem": 42438.06916,
            "Ipotek_per_chelovek": 18.72998553
        },
        {
            "Region": "Воронежская область",
            "Ipotecs": 38540,
            "Money": 92747000000,
            "Dolgi": 1881740,
            "Dengi_Dengi": 30742,
            "Ipotek_voluem": 40226.69942,
            "Ipotek_per_chelovek": 16.71576435
        },
        {
            "Region": "г. Москва",
            "Ipotecs": 189174,
            "Money": 1257689000000,
            "Dolgi": 22866762,
            "Dengi_Dengi": 324006,
            "Ipotek_voluem": 99382.38095,
            "Ipotek_per_chelovek": 14.94849882
        },
        {
            "Region": "г. Санкт-Петербург",
            "Ipotecs": 121441,
            "Money": 530898000000,
            "Dolgi": 10828864,
            "Dengi_Dengi": 84910,
            "Ipotek_voluem": 2029.774483,
            "Ipotek_per_chelovek": 0.5971017443
        },
        {
            "Region": "г. Севастополь",
            "Ipotecs": 3215,
            "Money": 10929000000,
            "Dolgi": 174830,
            "Dengi_Dengi": 514,
            "Ipotek_voluem": 1040992.8,
            "Ipotek_per_chelovek": 238.12
        },
        {
            "Region": "Еврейская автономная область",
            "Ipotecs": 1688,
            "Money": 4563000000,
            "Dolgi": 100097,
            "Dengi_Dengi": 1644,
            "Ipotek_voluem": 29156.54952,
            "Ipotek_per_chelovek": 10.78594249
        },
        {
            "Region": "Забайкальский край",
            "Ipotecs": 12433,
            "Money": 40812000000,
            "Dolgi": 798773,
            "Dengi_Dengi": 10728,
            "Ipotek_voluem": 38739.99155,
            "Ipotek_per_chelovek": 11.80178171
        },
        {
            "Region": "Ивановская область",
            "Ipotecs": 11800,
            "Money": 28745000000,
            "Dolgi": 583041,
            "Dengi_Dengi": 7842,
            "Ipotek_voluem": 29122.66269,
            "Ipotek_per_chelovek": 11.95503287
        },
        {
            "Region": "Иркутская область",
            "Ipotecs": 37207,
            "Money": 98279000000,
            "Dolgi": 2107579,
            "Dengi_Dengi": 31578,
            "Ipotek_voluem": 41380.26569,
            "Ipotek_per_chelovek": 15.66596674
        },
        {
            "Region": "Кабардино-Балкарская Республика",
            "Ipotecs": 5674,
            "Money": 14538000000,
            "Dolgi": 328086,
            "Dengi_Dengi": 5800,
            "Ipotek_voluem": 16725.89799,
            "Ipotek_per_chelovek": 6.527909286
        },
        {
            "Region": "Калининградская область",
            "Ipotecs": 17460,
            "Money": 47735000000,
            "Dolgi": 1003531,
            "Dengi_Dengi": 45368,
            "Ipotek_voluem": 46862.23769,
            "Ipotek_per_chelovek": 17.14077029
        },
        {
            "Region": "Калужская область",
            "Ipotecs": 18124,
            "Money": 54447000000,
            "Dolgi": 1177052,
            "Dengi_Dengi": 14690,
            "Ipotek_voluem": 54393.69418,
            "Ipotek_per_chelovek": 18.10625587
        },
        {
            "Region": "Камчатский край",
            "Ipotecs": 12089,
            "Money": 20875000000,
            "Dolgi": 395543,
            "Dengi_Dengi": 2648,
            "Ipotek_voluem": 66978.53799,
            "Ipotek_per_chelovek": 38.78819381
        },
        {
            "Region": "Карачаево-Черкесская Республика",
            "Ipotecs": 4340,
            "Money": 10795000000,
            "Dolgi": 196520,
            "Dengi_Dengi": 11680,
            "Ipotek_voluem": 23197.24427,
            "Ipotek_per_chelovek": 9.326173239
        },
        {
            "Region": "Кемеровская область",
            "Ipotecs": 48062,
            "Money": 94941000000,
            "Dolgi": 1936345,
            "Dengi_Dengi": 19014,
            "Ipotek_voluem": 36052.00183,
            "Ipotek_per_chelovek": 18.25061156
        },
        {
            "Region": "Кировская область",
            "Ipotecs": 27461,
            "Money": 46154000000,
            "Dolgi": 1048615,
            "Dengi_Dengi": 8156,
            "Ipotek_voluem": 36918.09054,
            "Ipotek_per_chelovek": 21.96575994
        },
        {
            "Region": "Костромская область",
            "Ipotecs": 9457,
            "Money": 21496000000,
            "Dolgi": 437521,
            "Dengi_Dengi": 2858,
            "Ipotek_voluem": 34206.25916,
            "Ipotek_per_chelovek": 15.04878084
        },
        {
            "Region": "Краснодарский край",
            "Ipotecs": 79355,
            "Money": 229024000000,
            "Dolgi": 4740579,
            "Dengi_Dengi": 68558,
            "Ipotek_voluem": 40293.12729,
            "Ipotek_per_chelovek": 13.96124911
        },
        {
            "Region": "Красноярский край",
            "Ipotecs": 49100,
            "Money": 153841000000,
            "Dolgi": 3202329,
            "Dengi_Dengi": 55108,
            "Ipotek_voluem": 53867.80135,
            "Ipotek_per_chelovek": 17.19248475
        },
        {
            "Region": "Курганская область",
            "Ipotecs": 29837,
            "Money": 29120000000,
            "Dolgi": 594393,
            "Dengi_Dengi": 4826,
            "Ipotek_voluem": 35574.23311,
            "Ipotek_per_chelovek": 36.45015087
        },
        {
            "Region": "Курская область",
            "Ipotecs": 14088,
            "Money": 36755000000,
            "Dolgi": 748402,
            "Dengi_Dengi": 6018,
            "Ipotek_voluem": 33520.65868,
            "Ipotek_per_chelovek": 12.84829383
        },
        {
            "Region": "Ленинградская область",
            "Ipotecs": 33433,
            "Money": 119043000000,
            "Dolgi": 2654249,
            "Dengi_Dengi": 20442,
            "Ipotek_voluem": 62895.49752,
            "Ipotek_per_chelovek": 17.66408078
        },
        {
            "Region": "Липецкая область",
            "Ipotecs": 15177,
            "Money": 38270000000,
            "Dolgi": 793895,
            "Dengi_Dengi": 6334,
            "Ipotek_voluem": 33921.53109,
            "Ipotek_per_chelovek": 13.45249745
        },
        {
            "Region": "Магаданская область",
            "Ipotecs": 5188,
            "Money": 13492000000,
            "Dolgi": 252463,
            "Dengi_Dengi": 1588,
            "Ipotek_voluem": 97041.01155,
            "Ipotek_per_chelovek": 37.31461369
        },
        {
            "Region": "Московская область",
            "Ipotecs": 140030,
            "Money": 657945000000,
            "Dolgi": 13737958,
            "Dengi_Dengi": 189488,
            "Ipotek_voluem": 85353.19263,
            "Ipotek_per_chelovek": 18.16566364
        },
        {
            "Region": "Мурманская область",
            "Ipotecs": 13133,
            "Money": 39417000000,
            "Dolgi": 823453,
            "Dengi_Dengi": 5640,
            "Ipotek_voluem": 53784.87687,
            "Ipotek_per_chelovek": 17.92010523
        },
        {
            "Region": "Нижегородская область",
            "Ipotecs": 43358,
            "Money": 125854000000,
            "Dolgi": 2544495,
            "Dengi_Dengi": 25286,
            "Ipotek_voluem": 2835251.977,
            "Ipotek_per_chelovek": 976.773525
        },
        {
            "Region": "Новгородская область",
            "Ipotecs": 8407,
            "Money": 20668000000,
            "Dolgi": 459855,
            "Dengi_Dengi": 2982,
            "Ipotek_voluem": 6506.425835,
            "Ipotek_per_chelovek": 2.646580317
        },
        {
            "Region": "Новосибирская область",
            "Ipotecs": 55367,
            "Money": 189572000000,
            "Dolgi": 3638991,
            "Dengi_Dengi": 40480,
            "Ipotek_voluem": 319998.6496,
            "Ipotek_per_chelovek": 93.45982124
        },
        {
            "Region": "Омская область",
            "Ipotecs": 28672,
            "Money": 78556000000,
            "Dolgi": 1524807,
            "Dengi_Dengi": 13148,
            "Ipotek_voluem": 28198.35769,
            "Ipotek_per_chelovek": 10.29206314
        },
        {
            "Region": "Оренбургская область",
            "Ipotecs": 36464,
            "Money": 80400000000,
            "Dolgi": 1712183,
            "Dengi_Dengi": 15182,
            "Ipotek_voluem": 42234.09983,
            "Ipotek_per_chelovek": 19.15453005
        },
        {
            "Region": "Орловская область",
            "Ipotecs": 11450,
            "Money": 28616000000,
            "Dolgi": 597326,
            "Dengi_Dengi": 3654,
            "Ipotek_voluem": 14728.38493,
            "Ipotek_per_chelovek": 5.893206857
        },
        {
            "Region": "Пензенская область",
            "Ipotecs": 24977,
            "Money": 55555000000,
            "Dolgi": 1062109,
            "Dengi_Dengi": 7360,
            "Ipotek_voluem": 76660.78826,
            "Ipotek_per_chelovek": 34.46596181
        },
        {
            "Region": "Пермский край",
            "Ipotecs": 45571,
            "Money": 121246000000,
            "Dolgi": 2534784,
            "Dengi_Dengi": 34772,
            "Ipotek_voluem": 93923.7647,
            "Ipotek_per_chelovek": 35.30178217
        },
        {
            "Region": "Приморский край",
            "Ipotecs": 29460,
            "Money": 124440000000,
            "Dolgi": 2037992,
            "Dengi_Dengi": 14194,
            "Ipotek_voluem": 48246.37755,
            "Ipotek_per_chelovek": 11.42187627
        },
        {
            "Region": "Псковская область",
            "Ipotecs": 8118,
            "Money": 19003000000,
            "Dolgi": 429550,
            "Dengi_Dengi": 4094,
            "Ipotek_voluem": 10119.58395,
            "Ipotek_per_chelovek": 4.323042809
        },
        {
            "Region": "Республика Адыгея (Адыгея)",
            "Ipotecs": 4065,
            "Money": 10380000000,
            "Dolgi": 242247,
            "Dengi_Dengi": 5258,
            "Ipotek_voluem": 16735.21441,
            "Ipotek_per_chelovek": 6.553819514
        },
        {
            "Region": "Республика Алтай",
            "Ipotecs": 1777,
            "Money": 3794000000,
            "Dolgi": 79754,
            "Dengi_Dengi": 2404,
            "Ipotek_voluem": 8191.429873,
            "Ipotek_per_chelovek": 3.836629121
        },
        {
            "Region": "Республика Башкортостан",
            "Ipotecs": 69881,
            "Money": 200632000000,
            "Dolgi": 4188332,
            "Dengi_Dengi": 37896,
            "Ipotek_voluem": 908026.105,
            "Ipotek_per_chelovek": 316.2694497
        },
        {
            "Region": "Республика Бурятия",
            "Ipotecs": 14373,
            "Money": 34818000000,
            "Dolgi": 692344,
            "Dengi_Dengi": 10408,
            "Ipotek_voluem": 8674.602981,
            "Ipotek_per_chelovek": 3.580908399
        },
        {
            "Region": "Республика Дагестан",
            "Ipotecs": 10057,
            "Money": 34265000000,
            "Dolgi": 597037,
            "Dengi_Dengi": 11818,
            "Ipotek_voluem": 34771.58725,
            "Ipotek_per_chelovek": 10.20568665
        },
        {
            "Region": "Республика Ингушетия",
            "Ipotecs": 1771,
            "Money": 2009000000,
            "Dolgi": 32345,
            "Dengi_Dengi": 860,
            "Ipotek_voluem": 641.1764199,
            "Ipotek_per_chelovek": 0.5652182378
        },
        {
            "Region": "Республика Калмыкия",
            "Ipotecs": 4195,
            "Money": 14003000000,
            "Dolgi": 296747,
            "Dengi_Dengi": 3040,
            "Ipotek_voluem": 27160.54651,
            "Ipotek_per_chelovek": 8.136720174
        },
        {
            "Region": "Республика Карелия",
            "Ipotecs": 10181,
            "Money": 26352000000,
            "Dolgi": 620373,
            "Dengi_Dengi": 3162,
            "Ipotek_voluem": 97605.78405,
            "Ipotek_per_chelovek": 37.70964205
        },
        {
            "Region": "Республика Коми",
            "Ipotecs": 16141,
            "Money": 41927000000,
            "Dolgi": 1021440,
            "Dengi_Dengi": 6766,
            "Ipotek_voluem": 68837.6232,
            "Ipotek_per_chelovek": 26.50101548
        },
        {
            "Region": "Республика Крым",
            "Ipotecs": 10962,
            "Money": 31326000000,
            "Dolgi": 479260,
            "Dengi_Dengi": 1400,
            "Ipotek_voluem": 38503.4231,
            "Ipotek_per_chelovek": 13.47361693
        },
        {
            "Region": "Республика Марий Эл",
            "Ipotecs": 11319,
            "Money": 22507000000,
            "Dolgi": 510686,
            "Dengi_Dengi": 3444,
            "Ipotek_voluem": 11835.9594,
            "Ipotek_per_chelovek": 5.952424776
        },
        {
            "Region": "Республика Мордовия",
            "Ipotecs": 22693,
            "Money": 27556000000,
            "Dolgi": 616895,
            "Dengi_Dengi": 3066,
            "Ipotek_voluem": 40803.63436,
            "Ipotek_per_chelovek": 33.60273169
        },
        {
            "Region": "Республика Саха (Якутия)",
            "Ipotecs": 18960,
            "Money": 82769000000,
            "Dolgi": 1877997,
            "Dengi_Dengi": 21566,
            "Ipotek_voluem": 106255.0949,
            "Ipotek_per_chelovek": 24.3399896
        },
        {
            "Region": "Республика Северная Осетия – Алания",
            "Ipotecs": 6195,
            "Money": 16448000000,
            "Dolgi": 353596,
            "Dengi_Dengi": 14644,
            "Ipotek_voluem": 16749.98549,
            "Ipotek_per_chelovek": 6.308740278
        },
        {
            "Region": "Республика Татарстан (Татарстан)",
            "Ipotecs": 75417,
            "Money": 226481000000,
            "Dolgi": 4376467,
            "Dengi_Dengi": 35716,
            "Ipotek_voluem": 326766.2005,
            "Ipotek_per_chelovek": 108.8114523
        },
        {
            "Region": "Республика Тыва",
            "Ipotecs": 4080,
            "Money": 10620000000,
            "Dolgi": 232969,
            "Dengi_Dengi": 3370,
            "Ipotek_voluem": 2727.188684,
            "Ipotek_per_chelovek": 1.047733506
        },
        {
            "Region": "Республика Хакасия",
            "Ipotecs": 13995,
            "Money": 18862000000,
            "Dolgi": 398230,
            "Dengi_Dengi": 3912,
            "Ipotek_voluem": 57093.9074,
            "Ipotek_per_chelovek": 42.36185103
        },
        {
            "Region": "Ростовская область",
            "Ipotecs": 61059,
            "Money": 154265000000,
            "Dolgi": 3320176,
            "Dengi_Dengi": 41310,
            "Ipotek_voluem": 289952.1837,
            "Ipotek_per_chelovek": 114.7647904
        },
        {
            "Region": "Рязанская область",
            "Ipotecs": 19169,
            "Money": 47810000000,
            "Dolgi": 1097583,
            "Dengi_Dengi": 8178,
            "Ipotek_voluem": 11433.73432,
            "Ipotek_per_chelovek": 4.584255454
        },
        {
            "Region": "Самарская область",
            "Ipotecs": 45919,
            "Money": 115621000000,
            "Dolgi": 2527723,
            "Dengi_Dengi": 33916,
            "Ipotek_voluem": 105276.8159,
            "Ipotek_per_chelovek": 41.81079656
        },
        {
            "Region": "Саратовская область",
            "Ipotecs": 32671,
            "Money": 79043000000,
            "Dolgi": 1675862,
            "Dengi_Dengi": 20892,
            "Ipotek_voluem": 25059.88909,
            "Ipotek_per_chelovek": 10.35805367
        },
        {
            "Region": "Сахалинская область",
            "Ipotecs": 7248,
            "Money": 39669000000,
            "Dolgi": 744282,
            "Dengi_Dengi": 4432,
            "Ipotek_voluem": 16562.48917,
            "Ipotek_per_chelovek": 3.026164549
        },
        {
            "Region": "Свердловская область",
            "Ipotecs": 87844,
            "Money": 226743000000,
            "Dolgi": 4746759,
            "Dengi_Dengi": 51220,
            "Ipotek_voluem": 466913.4984,
            "Ipotek_per_chelovek": 180.8900356
        },
        {
            "Region": "Смоленская область",
            "Ipotecs": 12976,
            "Money": 32532000000,
            "Dolgi": 734571,
            "Dengi_Dengi": 9898,
            "Ipotek_voluem": 7583.098353,
            "Ipotek_per_chelovek": 3.024661386
        },
        {
            "Region": "Ставропольский край",
            "Ipotecs": 31946,
            "Money": 81888000000,
            "Dolgi": 1693367,
            "Dengi_Dengi": 27418,
            "Ipotek_voluem": 88899.79341,
            "Ipotek_per_chelovek": 34.68142829
        },
        {
            "Region": "Тамбовская область",
            "Ipotecs": 11838,
            "Money": 29966000000,
            "Dolgi": 660904,
            "Dengi_Dengi": 4292,
            "Ipotek_voluem": 10729.74897,
            "Ipotek_per_chelovek": 4.238762874
        },
        {
            "Region": "Тверская область",
            "Ipotecs": 19234,
            "Money": 51766000000,
            "Dolgi": 1152083,
            "Dengi_Dengi": 10080,
            "Ipotek_voluem": 52056.47513,
            "Ipotek_per_chelovek": 19.34192796
        },
        {
            "Region": "Томская область",
            "Ipotecs": 15638,
            "Money": 42178000000,
            "Dolgi": 904183,
            "Dengi_Dengi": 5982,
            "Ipotek_voluem": 33861.0763,
            "Ipotek_per_chelovek": 12.55440066
        },
        {
            "Region": "Тульская область",
            "Ipotecs": 21274,
            "Money": 62637000000,
            "Dolgi": 1274050,
            "Dengi_Dengi": 9044,
            "Ipotek_voluem": 58520.71166,
            "Ipotek_per_chelovek": 19.87594585
        },
        {
            "Region": "Тюменская область",
            "Ipotecs": 90641,
            "Money": 320517000000,
            "Dolgi": 7246079,
            "Dengi_Dengi": 62910,
            "Ipotek_voluem": 221181.2037,
            "Ipotek_per_chelovek": 62.54921107
        },
        {
            "Region": "Удмуртская Республика",
            "Ipotecs": 33532,
            "Money": 78565000000,
            "Dolgi": 1615146,
            "Dengi_Dengi": 10502,
            "Ipotek_voluem": 20795.10266,
            "Ipotek_per_chelovek": 8.875471043
        },
        {
            "Region": "Ульяновская область",
            "Ipotecs": 19530,
            "Money": 45848000000,
            "Dolgi": 988000,
            "Dengi_Dengi": 7264,
            "Ipotek_voluem": 29706.05596,
            "Ipotek_per_chelovek": 12.65397123
        },
        {
            "Region": "Хабаровский край",
            "Ipotecs": 21101,
            "Money": 82683000000,
            "Dolgi": 1579273,
            "Dengi_Dengi": 13318,
            "Ipotek_voluem": 55367.23996,
            "Ipotek_per_chelovek": 14.12991946
        },
        {
            "Region": "Челябинская область",
            "Ipotecs": 55838,
            "Money": 134665000000,
            "Dolgi": 2675036,
            "Dengi_Dengi": 36848,
            "Ipotek_voluem": 110533.4481,
            "Ipotek_per_chelovek": 45.83200295
        },
        {
            "Region": "Чеченская Республика",
            "Ipotecs": 12892,
            "Money": 14003000000,
            "Dolgi": 148865,
            "Dengi_Dengi": 5730,
            "Ipotek_voluem": 10762.20845,
            "Ipotek_per_chelovek": 9.908333314
        },
        {
            "Region": "Чувашская Республика – Чувашия",
            "Ipotecs": 29809,
            "Money": 63765000000,
            "Dolgi": 1391455,
            "Dengi_Dengi": 9584,
            "Ipotek_voluem": 37783.2186,
            "Ipotek_per_chelovek": 17.66298068
        },
        {
            "Region": "Чукотский автономный округ",
            "Ipotecs": 868,
            "Money": 4173000000,
            "Dolgi": 84539,
            "Dengi_Dengi": 236,
            "Ipotek_voluem": 1212.091286,
            "Ipotek_per_chelovek": 0.2521196348
        },
        {
            "Region": "Ярославская область",
            "Ipotecs": 18256,
            "Money": 43850000000,
            "Dolgi": 904391,
            "Dengi_Dengi": 13060,
            "Ipotek_voluem": 29272.51948,
            "Ipotek_per_chelovek": 12.18698097
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
