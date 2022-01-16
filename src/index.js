module.exports = function toReadable (number) {
  const digits = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const decades = ['',' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const seconds = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  let result;
  let temp100;
  let temp10;
  let temp1;
  let temp;

    if (number === 0) {
      return 'zero';
    }

    else if ((number/100 >= 1)) {
      // Округляет до меньшего
      temp100 = (Math.floor(number/100));
      // Получаем вторую цифру
      temp10 = Math.floor((number%100)/10);
      // На что будем делить с остатком, чтобы получить третью
      // Не является ли вторая цифра нулем?
      if (temp10 > 0 && temp10 != 1) {
        temp1 = temp10 * 10;
        temp = ((number%100)%temp1);
        result = digits[temp100] + ' hundred ' + decades[temp10] + ' ' + digits[temp];
      }
      else if (temp10 == 1) {
        sec = (number%100)%10;
          if (sec === 0) {
            result = digits[temp100] + ' hundred ' + 'ten';
          }
          else  {
            result = digits[temp100] + ' hundred ' + seconds[sec];
          }
          }
      else if (temp10 ===0) {
         temp = number%100;
         result = digits[temp100] + ' hundred ' + digits[temp];
        }
      }
      

    // Вроде правильно написал условие для двузначного?
    else if ((number/10 > 0) && (number/10 < 10)){
        if(number === 10) {
          result = 'ten';
        }
        else if (number > 10 && number < 20){
          sec = number%10;
          result = seconds[sec];
        }
        else {
         // Первая цифра
         temp10 = Math.floor(number/10);
         // Вторая
         temp = number%10;
         result = decades[temp10] + ' ' + digits[temp];
        }

        }
        else {
          result = digits[number];
        }
  return result.trim();
    }

    


