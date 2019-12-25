import { forEach } from 'ramda';
import { extractPhoneNumber } from '.';

const phoneNumbers = [
  '1234567',
  '12345678',
  '123456789',
  '1234567891',
  '12345678910',
  '16572244548',
  '+54 115 236 0151',
  '+61 2 8310 8040',
  '+43 1267 5659',
  '+32 2 808 91 42',
  '+22 96 150 9868',
  '+55 11 4380 8033',
  '+35 92 491 5120',
  '+1 587 316 4436',
  '+1 780 666 9719',
  '+1 902 701 0543',
  '+1 438 794 7820',
  '+1 613 699 2642',
  '+1 418 478 1534',
  '+1 306 500 6992',
  '+1 506 799 5774',
  '+1 647 494 4053',
  '+1 604 259 2561',
  '+1 204 500 0720',
  '+86 21 8024 5697',
  '+385 1 7776 206',
  '+357 22 222173',
  '+420 255 719 520',
  '+45 32 70 05 98',
  '+18 29 947 5214',
  '+50 32 136 7471',
  '+37 2 880 7860',
  '+358 9 42411127',
  '+33 173 078 713',
  '+49 307 6759 848',
  '+233 24 242 6021',
  '+302 11 198 7281',
  '+224 66 071 0308',
  '+85 25 803 4545',
  '+36 1 255 0356',
  '+353 1 487 0050',
  '+972 39 350 644',
  '+39 068 997 1954',
  '+81 6 4560 2947',
  '+254 20 5293 367',
  '+37 16 616 3975',
  '+37 05 214 1729',
  '+352 2786 1971',
  '+52 558 526 4582',
  '+31 10 798 6126',
  '+644 280 7452',
  '+47 21 93 97 86',
  '+507 833 8962',
  '+511 707 1429',
  '+48 22 116 84 79',
  '+351 308 807 355',
  '+17 87 945 0332',
  '+40 356 780 163',
  '+653 158 3925',
  '+421 233 325736',
  '+386 1 600 31 04',
  '+27 21 205 6202',
  '+34 935 22 01 25',
  '+46 85 050 17 23',
  '+41 22 560 74 07',
  '+886 27 705 4479',
  '+90 212 900 3677',
  '+44 203 875 4507',
  '+1 773 231 9226',
  '115123610151',
  '21831018040',
  '126715659',
  '21808191142',
  '96115019868',
  '111438018033',
  '92149115120',
  '587131614436',
  '780166619719',
  '902170110543',
  '438179417820',
  '613169912642',
  '418147811534',
  '306150016992',
  '506179915774',
  '647149414053',
  '604125912561',
  '204150010720',
  '211802415697',
  '1177761206',
  '221222173',
  '25517191520',
  '32170105198',
  '29194715214',
  '32113617471',
  '2188017860',
  '9142411127',
  '17310781713',
  '307167591848',
  '24124216021',
  '11119817281',
  '66107110308',
  '25180314545',
  '1125510356',
  '1148710050',
  '3913501644',
  '068199711954',
  '61456012947',
  '20152931367',
  '16161613975',
  '05121411729',
  '278611971',
  '558152614582',
  '10179816126',
  '28017452',
  '21193197186',
  '83318962',
  '70711429',
  '221116184179',
  '30818071355',
  '87194510332',
  '35617801163',
  '15813925',
  '2331325736',
  '11600131104',
  '21120516202',
  '935122101125',
  '851050117123',
  '221560174107',
  '27170514479',
  '212190013677',
  '203187514507',
  '773123119226',
  '(650)437-1071',
  '+16504371071',
  '16504371071',
  '(650)437 1071',
  '650 437 1071',
  '1 650 437 1071',
  '1.650.437.1071',
  '650.437.1071',
  '437 1071',
  '437-1071',
  '1-650-437-1071',
  '+1 (650)437-1071',
  '+1(650)437 1071',
  '+1 (650) 437-1071',
  '+1 650 437 1071',
];

describe('C2D Global Office Country Phone Numbers Unit Test', () => {
  forEach((phoneNumber) => {
    it(`expect extractPhoneNumber to return value on ${phoneNumber}`, () => {
      expect(extractPhoneNumber(phoneNumber)).toBe(phoneNumber);
    });
  }, phoneNumbers);
});
