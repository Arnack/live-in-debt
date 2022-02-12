import React, { useState } from "react";
import { RusMap } from "../rusmap/rusmap";

const datas = [
  [
    ["ru-ms", 1369],
    ["ru-2509", 1111],
    ["ru-kd", 691],
    ["ru-sp", 475],
    ["ru-sa", 643],
    ["ru-sv", 667],
    ["ru-bk", 834],
    ["ru-ro", 638],
    ["ru-cl", 596],
    ["ru-vg", 624],
    ["ru-tt", 477],
    ["ru-ns", 648],
    ["ru-sr", 408],
    ["ru-nz", 343],
    ["ru-st", 315],
    ["ru-om", 457],
    ["ru-bl", 381],
    ["ru-pe", 342],
    ["ru-ul", 133],
    ["ru-pz", 184],
    ["ru-ob", 197],
    ["ru-tl", 54],
    ["ru-ir", 330],
    ["ru-ty", 111],
    ["ru-pr", 283],
    ["ru-ke", 299],
    ["ru-km", 192],
    ["ru-vo", 561],
    ["ru-al", 298],
    ["ru-ud", 169],
    ["ru-kg", 84],
    ["ru-iv", 114],
    ["ru-kh", 241],
    ["ru-lp", 197],
    ["ru-kn", 157],
    ["ru-ky", 365],
    ["ru-vr", 270],
    ["ru-ys", 133],
    ["ru-br", 150],
    ["ru-ks", 202],
    ["ru-vl", 199],
    ["ru-tv", 124],
    ["ru-to", 192],
    ["ru-cv", 363],
    ["ru-ar", 255],
    ["ru-rz", 414],
    ["ru-ck", 43],
    ["ru-as", 79],
    ["ru-ku", 112],
    ["ru-am", 101],
    ["ru-tb", 153],
    ["ru-mg", 85],
    ["ru-mr", 182],
    ["ru-kv", 79],
    ["ru-ln", 129],
    ["ru-sm", 78],
    ["ru-ct", 69],
    ["ru-ko", 85],
    ["ru-ps", 52],
    ["ru-no", 45],
    ["ru-ki", 136],
    ["ru-kt", 68],
    ["ru-ad", 57],
    ["ru-mm", 59],
    ["ru-ol", 161],
    ["ru-kl", 35],
    ["ru-da", 13],
    ["ru-me", 35],
    ["ru-ng", 26],
    ["ru-kb", 88],
    ["ru-kk", 36],
    ["ru-kr", 7],
    ["ru-ka", 44],
    ["ru-sl", 27],
    ["ru-kc", 38],
    ["ru-ga", 27],
    ["ru-sc", 7],
    ["ru-cn", 3],
    ["ru-yv", 6],
    ["ru-tu", 20],
    ["ru-mg", 15],
    ["ru-in", 9],
  ],
  [
    ["ru-ms", 2476],
    ["ru-2509", 1700],
    ["ru-kd", 1131],
    ["ru-sp", 1350],
    ["ru-sa", 992],
    ["ru-sv", 965],
    ["ru-bk", 1326],
    ["ru-ro", 808],
    ["ru-cl", 636],
    ["ru-vg", 695],
    ["ru-tt", 692],
    ["ru-ns", 904],
    ["ru-sr", 774],
    ["ru-nz", 636],
    ["ru-st", 387],
    ["ru-om", 650],
    ["ru-bl", 489],
    ["ru-pe", 498],
    ["ru-ul", 164],
    ["ru-pz", 455],
    ["ru-ob", 309],
    ["ru-tl", 183],
    ["ru-ir", 486],
    ["ru-ty", 215],
    ["ru-pr", 489],
    ["ru-ke", 558],
    ["ru-km", 357],
    ["ru-vo", 804],
    ["ru-al", 328],
    ["ru-ud", 232],
    ["ru-kg", 120],
    ["ru-iv", 123],
    ["ru-kh", 449],
    ["ru-lp", 235],
    ["ru-kn", 290],
    ["ru-ky", 476],
    ["ru-vr", 333],
    ["ru-ys", 277],
    ["ru-br", 197],
    ["ru-ks", 222],
    ["ru-vl", 216],
    ["ru-tv", 220],
    ["ru-to", 189],
    ["ru-cv", 339],
    ["ru-ar", 391],
    ["ru-rz", 426],
    ["ru-ck", 69],
    ["ru-as", 94],
    ["ru-ku", 155],
    ["ru-am", 93],
    ["ru-tb", 185],
    ["ru-mg", 147],
    ["ru-mr", 274],
    ["ru-kv", 222],
    ["ru-ln", 272],
    ["ru-sm", 201],
    ["ru-ct", 104],
    ["ru-ko", 158],
    ["ru-ps", 70],
    ["ru-no", 56],
    ["ru-ki", 209],
    ["ru-kt", 142],
    ["ru-ad", 81],
    ["ru-mm", 108],
    ["ru-ol", 135],
    ["ru-kl", 119],
    ["ru-da", 50],
    ["ru-me", 112],
    ["ru-ng", 58],
    ["ru-kb", 121],
    ["ru-kk", 72],
    ["ru-kr", 15],
    ["ru-ka", 36],
    ["ru-sl", 52],
    ["ru-kc", 23],
    ["ru-ga", 15],
    ["ru-sc", 1],
    ["ru-cn", 2],
    ["ru-yv", 16],
    ["ru-tu", 29],
    ["ru-mg", 17],
    ["ru-in", 14],
    ["ru-2485", 2],
    ["ru-nn", 1],
  ],
  [
    ["ru-ms", 3512],
    ["ru-2509", 2606],
    ["ru-kd", 1547],
    ["ru-sp", 2179],
    ["ru-sa", 1715],
    ["ru-sv", 1557],
    ["ru-bk", 2021],
    ["ru-ro", 1125],
    ["ru-cl", 1131],
    ["ru-vg", 1258],
    ["ru-tt", 994],
    ["ru-ns", 1216],
    ["ru-sr", 1235],
    ["ru-nz", 1080],
    ["ru-st", 591],
    ["ru-om", 1032],
    ["ru-bl", 586],
    ["ru-pe", 722],
    ["ru-ul", 525],
    ["ru-pz", 818],
    ["ru-ob", 523],
    ["ru-tl", 402],
    ["ru-ir", 836],
    ["ru-ty", 436],
    ["ru-pr", 562],
    ["ru-ke", 518],
    ["ru-km", 555],
    ["ru-vo", 939],
    ["ru-al", 498],
    ["ru-ud", 338],
    ["ru-kg", 303],
    ["ru-iv", 243],
    ["ru-kh", 650],
    ["ru-lp", 270],
    ["ru-kn", 447],
    ["ru-ky", 823],
    ["ru-vr", 259],
    ["ru-ys", 494],
    ["ru-br", 284],
    ["ru-ks", 370],
    ["ru-vl", 308],
    ["ru-tv", 298],
    ["ru-to", 289],
    ["ru-cv", 419],
    ["ru-ar", 508],
    ["ru-rz", 476],
    ["ru-ck", 137],
    ["ru-as", 162],
    ["ru-ku", 233],
    ["ru-am", 135],
    ["ru-tb", 138],
    ["ru-mg", 185],
    ["ru-mr", 289],
    ["ru-kv", 253],
    ["ru-ln", 179],
    ["ru-sm", 233],
    ["ru-ct", 147],
    ["ru-ko", 188],
    ["ru-ps", 103],
    ["ru-no", 99],
    ["ru-ki", 256],
    ["ru-kt", 101],
    ["ru-ad", 94],
    ["ru-mm", 125],
    ["ru-ol", 169],
    ["ru-kl", 204],
    ["ru-da", 53],
    ["ru-me", 127],
    ["ru-ng", 98],
    ["ru-kb", 168],
    ["ru-kk", 93],
    ["ru-kr", 20],
    ["ru-ka", 42],
    ["ru-sl", 75],
    ["ru-kc", 27],
    ["ru-ga", 30],
    ["ru-sc", 8],
    ["ru-cn", 2],
    ["ru-yv", 15],
    ["ru-tu", 32],
    ["ru-mg", 28],
    ["ru-in", 14],
  ],
  [
    ["ru-ms", 5089],
    ["ru-2509", 4315],
    ["ru-kd", 2745],
    ["ru-sp", 2815],
    ["ru-sa", 3003],
    ["ru-sv", 2881],
    ["ru-bk", 2769],
    ["ru-ro", 1994],
    ["ru-cl", 2065],
    ["ru-vg", 1951],
    ["ru-tt", 1709],
    ["ru-ns", 1591],
    ["ru-sr", 1845],
    ["ru-nz", 1421],
    ["ru-st", 965],
    ["ru-om", 1311],
    ["ru-bl", 1046],
    ["ru-pe", 1106],
    ["ru-ul", 1139],
    ["ru-pz", 1460],
    ["ru-ob", 923],
    ["ru-tl", 847],
    ["ru-ir", 1089],
    ["ru-ty", 757],
    ["ru-pr", 825],
    ["ru-ke", 780],
    ["ru-km", 872],
    ["ru-vo", 1175],
    ["ru-al", 578],
    ["ru-ud", 675],
    ["ru-kg", 740],
    ["ru-iv", 678],
    ["ru-kh", 907],
    ["ru-lp", 357],
    ["ru-kn", 692],
    ["ru-ky", 736],
    ["ru-vr", 729],
    ["ru-ys", 733],
    ["ru-br", 520],
    ["ru-ks", 471],
    ["ru-vl", 453],
    ["ru-tv", 519],
    ["ru-to", 573],
    ["ru-cv", 458],
    ["ru-ar", 639],
    ["ru-rz", 646],
    ["ru-ck", 328],
    ["ru-as", 346],
    ["ru-ku", 285],
    ["ru-am", 344],
    ["ru-tb", 254],
    ["ru-mg", 249],
    ["ru-mr", 424],
    ["ru-kv", 433],
    ["ru-ln", 261],
    ["ru-sm", 372],
    ["ru-ct", 210],
    ["ru-ko", 303],
    ["ru-ps", 222],
    ["ru-no", 227],
    ["ru-ki", 404],
    ["ru-kt", 194],
    ["ru-ad", 158],
    ["ru-mm", 249],
    ["ru-ol", 161],
    ["ru-kl", 306],
    ["ru-da", 121],
    ["ru-me", 190],
    ["ru-ng", 257],
    ["ru-kb", 183],
    ["ru-kk", 157],
    ["ru-kr", 73],
    ["ru-ka", 73],
    ["ru-sl", 77],
    ["ru-kc", 29],
    ["ru-ga", 83],
    ["ru-sc", 27],
    ["ru-cn", 14],
    ["ru-yv", 36],
    ["ru-tu", 57],
    ["ru-mg", 28],
    ["ru-in", 17],
    ["ru-2485", 1],
  ],
  [
    ["ru-ms", 7460],
    ["ru-2509", 6653],
    ["ru-kd", 5574],
    ["ru-sp", 5432],
    ["ru-sa", 5069],
    ["ru-sv", 5066],
    ["ru-bk", 4731],
    ["ru-ro", 4001],
    ["ru-cl", 3680],
    ["ru-vg", 3488],
    ["ru-tt", 3236],
    ["ru-ns", 3243],
    ["ru-sr", 3382],
    ["ru-nz", 3045],
    ["ru-st", 1928],
    ["ru-om", 2150],
    ["ru-bl", 1626],
    ["ru-pe", 2001],
    ["ru-ul", 1870],
    ["ru-pz", 2105],
    ["ru-ob", 1838],
    ["ru-tl", 1485],
    ["ru-ir", 1295],
    ["ru-ty", 1669],
    ["ru-pr", 1326],
    ["ru-ke", 1410],
    ["ru-km", 1460],
    ["ru-vo", 1619],
    ["ru-al", 1079],
    ["ru-ud", 1328],
    ["ru-kg", 1249],
    ["ru-iv", 1305],
    ["ru-kh", 1309],
    ["ru-lp", 847],
    ["ru-kn", 1196],
    ["ru-ky", 1249],
    ["ru-vr", 1133],
    ["ru-ys", 1015],
    ["ru-br", 973],
    ["ru-ks", 808],
    ["ru-vl", 736],
    ["ru-tv", 829],
    ["ru-to", 807],
    ["ru-cv", 774],
    ["ru-ar", 997],
    ["ru-rz", 873],
    ["ru-ck", 605],
    ["ru-as", 662],
    ["ru-ku", 577],
    ["ru-am", 636],
    ["ru-tb", 412],
    ["ru-mg", 516],
    ["ru-mr", 600],
    ["ru-kv", 552],
    ["ru-ln", 490],
    ["ru-sm", 508],
    ["ru-ct", 323],
    ["ru-ko", 491],
    ["ru-ps", 408],
    ["ru-no", 371],
    ["ru-ki", 564],
    ["ru-kt", 298],
    ["ru-ad", 418],
    ["ru-mm", 462],
    ["ru-ol", 336],
    ["ru-kl", 404],
    ["ru-da", 315],
    ["ru-me", 403],
    ["ru-ng", 366],
    ["ru-kb", 270],
    ["ru-kk", 223],
    ["ru-kr", 255],
    ["ru-ka", 237],
    ["ru-sl", 128],
    ["ru-kc", 70],
    ["ru-ga", 122],
    ["ru-sc", 52],
    ["ru-cn", 19],
    ["ru-yv", 75],
    ["ru-tu", 100],
    ["ru-mg", 47],
    ["ru-in", 36],
    ["ru-2485", 9],
  ],
  [
    ["ru-ms", 10213],
    ["ru-2509", 10045],
    ["ru-kd", 9757],
    ["ru-sp", 8185],
    ["ru-sa", 7946],
    ["ru-sv", 7895],
    ["ru-bk", 7477],
    ["ru-ro", 5989],
    ["ru-cl", 5916],
    ["ru-vg", 5060],
    ["ru-tt", 4970],
    ["ru-ns", 4918],
    ["ru-sr", 4631],
    ["ru-nz", 4323],
    ["ru-st", 3916],
    ["ru-om", 3528],
    ["ru-bl", 3448],
    ["ru-pe", 3222],
    ["ru-ul", 3142],
    ["ru-pz", 3000],
    ["ru-ob", 2982],
    ["ru-tl", 2796],
    ["ru-ir", 2565],
    ["ru-ty", 2535],
    ["ru-pr", 2323],
    ["ru-ke", 2304],
    ["ru-km", 2297],
    ["ru-vo", 2294],
    ["ru-al", 2291],
    ["ru-ud", 2157],
    ["ru-kg", 2099],
    ["ru-iv", 2065],
    ["ru-kh", 2038],
    ["ru-lp", 1977],
    ["ru-kn", 1897],
    ["ru-ky", 1878],
    ["ru-vr", 1872],
    ["ru-ys", 1690],
    ["ru-br", 1624],
    ["ru-ks", 1586],
    ["ru-vl", 1409],
    ["ru-tv", 1388],
    ["ru-to", 1379],
    ["ru-cv", 1330],
    ["ru-ar", 1318],
    ["ru-rz", 1316],
    ["ru-ck", 1276],
    ["ru-as", 1275],
    ["ru-ku", 1224],
    ["ru-am", 1172],
    ["ru-tb", 1080],
    ["ru-mg", 1039],
    ["ru-mr", 1006],
    ["ru-kv", 1002],
    ["ru-ln", 894],
    ["ru-sm", 866],
    ["ru-ct", 863],
    ["ru-ko", 825],
    ["ru-ps", 808],
    ["ru-no", 808],
    ["ru-ki", 760],
    ["ru-kt", 739],
    ["ru-ad", 722],
    ["ru-mm", 670],
    ["ru-ol", 610],
    ["ru-kl", 597],
    ["ru-da", 579],
    ["ru-me", 573],
    ["ru-ng", 495],
    ["ru-kb", 490],
    ["ru-kk", 477],
    ["ru-kr", 472],
    ["ru-ka", 345],
    ["ru-sl", 331],
    ["ru-kc", 281],
    ["ru-ga", 201],
    ["ru-sc", 185],
    ["ru-cn", 158],
    ["ru-yv", 140],
    ["ru-tu", 140],
    ["ru-mg", 127],
    ["ru-in", 122],
    ["ru-2485", 17],
    ["ru-nn", 1],
  ],
];

const dates = [2016, 2017, 2018, 2019, 2020, 2021];
const totalRus = [19574, 29827, 43984, 68980, 119045, 192846];

export const BancrouptMap = () => {
  const [currentDateIdx, setDateIdx] = useState(0);

  return (
    <>
      <RusMap
        mapTitle={"Банкротств по решению суда"}
        data={datas[currentDateIdx]}
      />
      <input
          value={currentDateIdx}
        min={0}
        max={5}
        onChange={(e) => setDateIdx(+e.target.value)}
        type={"range"}
      />{" "}
      {dates[currentDateIdx]} г. Всего банкротств: {totalRus[currentDateIdx]}
      <br />
      <br />
      <br />
    </>
  );
};
