import React, { useState } from "react";
import { RusMap } from "../rusmap/rusmap";

const datas = [
  [
    ["ru-al", 1850],
    ["ru-am", 528],
    ["ru-ar", 1167],
    ["ru-as", 577],
    ["ru-bl", 1054],
    ["ru-br", 752],
    ["ru-nn", 51],
    ["ru-vl", 1016],
    ["ru-vg", 2029],
    ["ru-vo", 10659],
    ["ru-vr", 7443],
    ["ru-ms", 151],
    ["ru-sp", 88],
    ["ru-sc", 579],
    ["ru-yv", 590],
    ["ru-ct", 1667],
    ["ru-iv", 302],
    ["ru-ir", 859],
    ["ru-kb", 820],
    ["ru-kn", 591],
    ["ru-kg", 174],
    ["ru-ka", 2185],
    ["ru-kc", 1339],
    ["ru-ke", 443],
    ["ru-kv", 4530],
    ["ru-kt", 2377],
    ["ru-kd", 1410],
    ["ru-ky", 747],
    ["ru-ku", 1935],
    ["ru-ks", 761],
    ["ru-ln", 251],
    ["ru-lp", 7652],
    ["ru-mg", 652],
    ["ru-2509", 2077],
    ["ru-mm", 400],
    ["ru-nz", 2551],
    ["ru-ng", 1308],
    ["ru-ns", 1782],
    ["ru-om", 764],
    ["ru-ob", 1263],
    ["ru-ol", 2105],
    ["ru-pz", 21874],
    ["ru-pe", 1339],
    ["ru-pr", 239],
    ["ru-ps", 60],
    ["ru-ad", 3296],
    ["ru-ga", 742],
    ["ru-bk", 526],
    ["ru-mg", 111],
    ["ru-da", 229],
    ["ru-in", 485],
    ["ru-kl", 773],
    ["ru-ki", 528],
    ["ru-ko", 541],
    ["ru-kr", 1141],
    ["ru-me", 867],
    ["ru-mr", 327],
    ["ru-ck", 3885],
    ["ru-no", 217],
    ["ru-tt", 673],
    ["ru-tu", 3179],
    ["ru-kk", 1002],
    ["ru-ro", 2253],
    ["ru-rz", 1480],
    ["ru-sa", 297],
    ["ru-sr", 4148],
    ["ru-sl", 646],
    ["ru-sv", 1578],
    ["ru-sm", 709],
    ["ru-st", 983],
    ["ru-tb", 718],
    ["ru-tv", 1046],
    ["ru-to", 4300],
    ["ru-tl", 1761],
    ["ru-ty", 921],
    ["ru-ud", 1053],
    ["ru-ul", 2695],
    ["ru-kh", 628],
    ["ru-cl", 1514],
    ["ru-cn", 42],
    ["ru-cv", 869],
  ],
  [
    ["ru-al", 3116],
    ["ru-am", 822],
    ["ru-ar", 1765],
    ["ru-as", 809],
    ["ru-bl", 1370],
    ["ru-br", 1048],
    ["ru-nn", 64],
    ["ru-vl", 1601],
    ["ru-vg", 2900],
    ["ru-vo", 15917],
    ["ru-vr", 10239],
    ["ru-ms", 261],
    ["ru-sp", 109],
    ["ru-sc", 847],
    ["ru-yv", 882],
    ["ru-ct", 2679],
    ["ru-iv", 436],
    ["ru-ir", 1360],
    ["ru-kb", 1284],
    ["ru-kn", 904],
    ["ru-kg", 259],
    ["ru-ka", 3625],
    ["ru-kc", 2107],
    ["ru-ke", 682],
    ["ru-kv", 6636],
    ["ru-kt", 3587],
    ["ru-kd", 2177],
    ["ru-ky", 906],
    ["ru-ku", 2743],
    ["ru-ks", 1137],
    ["ru-ln", 403],
    ["ru-lp", 11430],
    ["ru-mg", 964],
    ["ru-2509", 3379],
    ["ru-mm", 611],
    ["ru-nz", 4237],
    ["ru-ng", 2106],
    ["ru-ns", 2555],
    ["ru-om", 909],
    ["ru-ob", 1836],
    ["ru-ol", 3403],
    ["ru-pz", 33848],
    ["ru-pe", 2138],
    ["ru-pr", 290],
    ["ru-ps", 93],
    ["ru-ad", 5243],
    ["ru-ga", 991],
    ["ru-bk", 748],
    ["ru-mg", 97],
    ["ru-da", 291],
    ["ru-in", 691],
    ["ru-kl", 1133],
    ["ru-ki", 779],
    ["ru-ko", 910],
    ["ru-kr", 1618],
    ["ru-me", 1283],
    ["ru-mr", 497],
    ["ru-ck", 5525],
    ["ru-no", 299],
    ["ru-tt", 1106],
    ["ru-tu", 4592],
    ["ru-kk", 1525],
    ["ru-ro", 3546],
    ["ru-rz", 2347],
    ["ru-sa", 524],
    ["ru-sr", 6558],
    ["ru-sl", 1002],
    ["ru-sv", 2235],
    ["ru-sm", 944],
    ["ru-st", 1485],
    ["ru-tb", 1098],
    ["ru-tv", 1573],
    ["ru-to", 6371],
    ["ru-tl", 2662],
    ["ru-ty", 1432],
    ["ru-ud", 1510],
    ["ru-ul", 4297],
    ["ru-kh", 811],
    ["ru-cl", 2293],
    ["ru-cn", 48],
    ["ru-cv", 1376],
  ],
  [
    ["ru-al", 3892],
    ["ru-am", 958],
    ["ru-ar", 2035],
    ["ru-as", 1182],
    ["ru-bl", 1710],
    ["ru-br", 1373],
    ["ru-nn", 42],
    ["ru-vl", 1962],
    ["ru-vg", 3471],
    ["ru-vo", 18268],
    ["ru-vr", 11566],
    ["ru-ms", 251],
    ["ru-sp", 152],
    ["ru-sc", 1150],
    ["ru-yv", 1046],
    ["ru-ct", 3448],
    ["ru-iv", 555],
    ["ru-ir", 1628],
    ["ru-kb", 1541],
    ["ru-kn", 1159],
    ["ru-kg", 387],
    ["ru-ka", 4550],
    ["ru-kc", 2509],
    ["ru-ke", 829],
    ["ru-kv", 7738],
    ["ru-kt", 4554],
    ["ru-kd", 2639],
    ["ru-ky", 1367],
    ["ru-ku", 3086],
    ["ru-ks", 1452],
    ["ru-ln", 407],
    ["ru-lp", 13136],
    ["ru-mg", 1151],
    ["ru-2509", 3955],
    ["ru-mm", 829],
    ["ru-nz", 5327],
    ["ru-ng", 2501],
    ["ru-ns", 3263],
    ["ru-om", 993],
    ["ru-ob", 2298],
    ["ru-ol", 4463],
    ["ru-pz", 42062],
    ["ru-pe", 2657],
    ["ru-pr", 363],
    ["ru-ps", 151],
    ["ru-ad", 6528],
    ["ru-ga", 1188],
    ["ru-bk", 971],
    ["ru-mg", 152],
    ["ru-da", 340],
    ["ru-in", 1033],
    ["ru-kl", 1527],
    ["ru-ki", 969],
    ["ru-ko", 1093],
    ["ru-kr", 1862],
    ["ru-me", 1544],
    ["ru-mr", 556],
    ["ru-ck", 6907],
    ["ru-no", 366],
    ["ru-tt", 1360],
    ["ru-tu", 5659],
    ["ru-kk", 1758],
    ["ru-ro", 4320],
    ["ru-rz", 3023],
    ["ru-sa", 611],
    ["ru-sr", 8149],
    ["ru-sl", 1215],
    ["ru-sv", 2686],
    ["ru-sm", 1137],
    ["ru-st", 1863],
    ["ru-tb", 1371],
    ["ru-tv", 1968],
    ["ru-to", 8220],
    ["ru-tl", 3093],
    ["ru-ty", 1901],
    ["ru-ud", 1839],
    ["ru-ul", 5051],
    ["ru-kh", 1163],
    ["ru-cl", 2811],
    ["ru-cn", 69],
    ["ru-cv", 1728],
  ],
  [
    ["ru-al", 3962],
    ["ru-am", 948],
    ["ru-ar", 2302],
    ["ru-as", 1167],
    ["ru-bl", 1777],
    ["ru-br", 1620],
    ["ru-nn", 69],
    ["ru-vl", 2142],
    ["ru-vg", 3929],
    ["ru-vo", 19801],
    ["ru-vr", 12193],
    ["ru-ms", 355],
    ["ru-sp", 145],
    ["ru-sc", 1218],
    ["ru-yv", 1173],
    ["ru-ct", 3729],
    ["ru-iv", 546],
    ["ru-ir", 1952],
    ["ru-kb", 1717],
    ["ru-kn", 1061],
    ["ru-kg", 471],
    ["ru-ka", 4703],
    ["ru-kc", 2645],
    ["ru-ke", 941],
    ["ru-kv", 8856],
    ["ru-kt", 5023],
    ["ru-kd", 3054],
    ["ru-ky", 1320],
    ["ru-ku", 3530],
    ["ru-ks", 1490],
    ["ru-ln", 441],
    ["ru-lp", 14412],
    ["ru-mg", 1186],
    ["ru-2509", 4339],
    ["ru-mm", 868],
    ["ru-nz", 5683],
    ["ru-ng", 2737],
    ["ru-ns", 3553],
    ["ru-om", 1123],
    ["ru-ob", 2422],
    ["ru-ol", 4702],
    ["ru-pz", 44403],
    ["ru-pe", 2707],
    ["ru-pr", 392],
    ["ru-ps", 180],
    ["ru-ad", 6806],
    ["ru-ga", 1375],
    ["ru-bk", 1018],
    ["ru-mg", 150],
    ["ru-da", 363],
    ["ru-in", 1013],
    ["ru-kl", 1603],
    ["ru-ki", 1013],
    ["ru-ko", 1114],
    ["ru-kr", 2038],
    ["ru-me", 1644],
    ["ru-mr", 524],
    ["ru-ck", 7265],
    ["ru-no", 341],
    ["ru-tt", 1412],
    ["ru-tu", 5929],
    ["ru-kk", 1879],
    ["ru-ro", 4545],
    ["ru-rz", 3188],
    ["ru-sa", 696],
    ["ru-sr", 8973],
    ["ru-sl", 1296],
    ["ru-sv", 2937],
    ["ru-sm", 1200],
    ["ru-st", 1899],
    ["ru-tb", 1584],
    ["ru-tv", 2149],
    ["ru-to", 8797],
    ["ru-tl", 3242],
    ["ru-ty", 1897],
    ["ru-ud", 1992],
    ["ru-ul", 5443],
    ["ru-kh", 1405],
    ["ru-cl", 2936],
    ["ru-cn", 74],
    ["ru-cv", 1973],
  ],
  [
    ["ru-al", 3133],
    ["ru-am", 864],
    ["ru-ar", 1654],
    ["ru-as", 1008],
    ["ru-bl", 1613],
    ["ru-br", 1203],
    ["ru-nn", 62],
    ["ru-vl", 1542],
    ["ru-vg", 2791],
    ["ru-vo", 12467],
    ["ru-vr", 7928],
    ["ru-ms", 280],
    ["ru-sp", 151],
    ["ru-sc", 1026],
    ["ru-yv", 911],
    ["ru-ct", 2884],
    ["ru-iv", 467],
    ["ru-ir", 1257],
    ["ru-kb", 1391],
    ["ru-kn", 779],
    ["ru-kg", 366],
    ["ru-ka", 3445],
    ["ru-kc", 2045],
    ["ru-ke", 802],
    ["ru-kv", 6149],
    ["ru-kt", 3632],
    ["ru-kd", 1896],
    ["ru-ky", 1114],
    ["ru-ku", 2193],
    ["ru-ks", 1217],
    ["ru-ln", 442],
    ["ru-lp", 9922],
    ["ru-mg", 985],
    ["ru-2509", 3491],
    ["ru-mm", 632],
    ["ru-nz", 4202],
    ["ru-ng", 2432],
    ["ru-ns", 2844],
    ["ru-om", 805],
    ["ru-ob", 1729],
    ["ru-ol", 3738],
    ["ru-pz", 36067],
    ["ru-pe", 2297],
    ["ru-pr", 352],
    ["ru-ps", 161],
    ["ru-ad", 5630],
    ["ru-ga", 1121],
    ["ru-bk", 812],
    ["ru-mg", 218],
    ["ru-da", 345],
    ["ru-in", 751],
    ["ru-kl", 1273],
    ["ru-ki", 1078],
    ["ru-ko", 810],
    ["ru-kr", 1453],
    ["ru-me", 1805],
    ["ru-mr", 479],
    ["ru-ck", 5679],
    ["ru-no", 305],
    ["ru-tt", 973],
    ["ru-tu", 4710],
    ["ru-kk", 1408],
    ["ru-ro", 3672],
    ["ru-rz", 2747],
    ["ru-sa", 684],
    ["ru-sr", 6264],
    ["ru-sl", 974],
    ["ru-sv", 2531],
    ["ru-sm", 865],
    ["ru-st", 1407],
    ["ru-tb", 1294],
    ["ru-tv", 1632],
    ["ru-to", 6921],
    ["ru-tl", 2678],
    ["ru-ty", 1537],
    ["ru-ud", 1723],
    ["ru-ul", 4794],
    ["ru-kh", 1250],
    ["ru-cl", 2265],
    ["ru-cn", 105],
    ["ru-cv", 1362],
  ],
  [
    ["ru-al", 3524],
    ["ru-am", 858],
    ["ru-ar", 1693],
    ["ru-as", 1105],
    ["ru-bl", 1544],
    ["ru-br", 1300],
    ["ru-nn", 47],
    ["ru-vl", 1772],
    ["ru-vg", 3033],
    ["ru-vo", 14827],
    ["ru-vr", 9340],
    ["ru-ms", 237],
    ["ru-sp", 146],
    ["ru-sc", 1044],
    ["ru-yv", 1036],
    ["ru-ct", 3024],
    ["ru-iv", 470],
    ["ru-ir", 1349],
    ["ru-kb", 1438],
    ["ru-kn", 1049],
    ["ru-kg", 446],
    ["ru-ka", 3926],
    ["ru-kc", 2290],
    ["ru-ke", 816],
    ["ru-kv", 5654],
    ["ru-kt", 4012],
    ["ru-kd", 2491],
    ["ru-ky", 1140],
    ["ru-ku", 2577],
    ["ru-ks", 1335],
    ["ru-ln", 382],
    ["ru-lp", 11161],
    ["ru-mg", 1052],
    ["ru-2509", 3447],
    ["ru-mm", 680],
    ["ru-nz", 4537],
    ["ru-ng", 2440],
    ["ru-ns", 3068],
    ["ru-om", 972],
    ["ru-ob", 1995],
    ["ru-ol", 3690],
    ["ru-pz", 37346],
    ["ru-pe", 2542],
    ["ru-pr", 341],
    ["ru-ps", 140],
    ["ru-ad", 5862],
    ["ru-ga", 1138],
    ["ru-bk", 924],
    ["ru-mg", 217],
    ["ru-da", 372],
    ["ru-in", 787],
    ["ru-kl", 1340],
    ["ru-ki", 796],
    ["ru-ko", 939],
    ["ru-kr", 1857],
    ["ru-me", 1657],
    ["ru-mr", 518],
    ["ru-ck", 6371],
    ["ru-no", 385],
    ["ru-tt", 1153],
    ["ru-tu", 4944],
    ["ru-kk", 1564],
    ["ru-ro", 3683],
    ["ru-rz", 2805],
    ["ru-sa", 567],
    ["ru-sr", 7350],
    ["ru-sl", 1061],
    ["ru-sv", 2787],
    ["ru-sm", 956],
    ["ru-st", 1631],
    ["ru-tb", 1255],
    ["ru-tv", 1780],
    ["ru-to", 7671],
    ["ru-tl", 2697],
    ["ru-ty", 1609],
    ["ru-ud", 1804],
    ["ru-ul", 4791],
    ["ru-kh", 1625],
    ["ru-cl", 2433],
    ["ru-cn", 70],
    ["ru-cv", 1488],
  ],
  [
    ["ru-al", 4246],
    ["ru-am", 1273],
    ["ru-ar", 2296],
    ["ru-as", 1292],
    ["ru-bl", 1914],
    ["ru-br", 1547],
    ["ru-nn", 75],
    ["ru-vl", 2210],
    ["ru-vg", 4122],
    ["ru-vo", 19597],
    ["ru-vr", 12733],
    ["ru-ms", 344],
    ["ru-sp", 161],
    ["ru-sc", 1316],
    ["ru-yv", 1215],
    ["ru-ct", 3941],
    ["ru-iv", 586],
    ["ru-ir", 1631],
    ["ru-kb", 1928],
    ["ru-kn", 1369],
    ["ru-kg", 463],
    ["ru-ka", 4976],
    ["ru-kc", 2808],
    ["ru-ke", 934],
    ["ru-kv", 7380],
    ["ru-kt", 5120],
    ["ru-kd", 3204],
    ["ru-ky", 1467],
    ["ru-ku", 3453],
    ["ru-ks", 1417],
    ["ru-ln", 640],
    ["ru-lp", 14245],
    ["ru-mg", 1367],
    ["ru-2509", 4325],
    ["ru-mm", 807],
    ["ru-nz", 5616],
    ["ru-ng", 2922],
    ["ru-ns", 3956],
    ["ru-om", 1151],
    ["ru-ob", 2993],
    ["ru-ol", 4573],
    ["ru-pz", 46486],
    ["ru-pe", 3248],
    ["ru-pr", 417],
    ["ru-ps", 203],
    ["ru-ad", 7448],
    ["ru-ga", 1626],
    ["ru-bk", 934],
    ["ru-mg", 60],
    ["ru-da", 399],
    ["ru-in", 980],
    ["ru-kl", 1530],
    ["ru-ki", 1270],
    ["ru-ko", 1125],
    ["ru-kr", 2919],
    ["ru-me", 1913],
    ["ru-mr", 705],
    ["ru-ck", 8342],
    ["ru-no", 498],
    ["ru-tt", 1416],
    ["ru-tu", 6485],
    ["ru-kk", 1927],
    ["ru-ro", 4805],
    ["ru-rz", 3400],
    ["ru-sa", 814],
    ["ru-sr", 9402],
    ["ru-sl", 1256],
    ["ru-sv", 3404],
    ["ru-sm", 1165],
    ["ru-st", 1964],
    ["ru-tb", 1647],
    ["ru-tv", 2145],
    ["ru-to", 9251],
    ["ru-tl", 3447],
    ["ru-ty", 2033],
    ["ru-ud", 2181],
    ["ru-ul", 5698],
    ["ru-kh", 314],
    ["ru-cl", 2915],
    ["ru-cn", 67],
    ["ru-cv", 1909],
  ],
];

const monthes = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Июль",
  "Сентябрь",
  "Декабрь",
];

export const MortgageNumByRegions = () => {
  const [currentMIdx, setCMI] = useState(0);

  return (
    <>
      <RusMap
        mapTitle={"Выданные ипотечные кредиты в 2021 г."}
        data={datas[currentMIdx]}
      />
      <input
        value={currentMIdx}
        min={0}
        max={6}
        onChange={(e) => setCMI(+e.target.value)}
        type={"range"}
      />{" "}
      {monthes[currentMIdx]} 2021
      <br />
      <br />
      <br />
    </>
  );
};
