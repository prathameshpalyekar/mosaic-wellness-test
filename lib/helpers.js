export const STRIP_HTML = (text) => {
  return text.replace(/<[^>]+>/g, '');;
};

const roundValue = (val) => {
  const decimal = val % 1;
  if (decimal < 0.1 || decimal > 0.93) {
    return Math.round(val);
  }
  return val;
}

export const NUM_DIFFERENTIATION = (value, approximate = true) => {
  let val;
  if (value >= 10000000) {
    val = ROUND_DOWN(value / 10000000.0);
    const roundVal = approximate ? roundValue(val) : val;
    val = parseFloat(roundVal) + ' Crore';
  } else if (value >= 100000) {
    val = ROUND_DOWN(value / 100000.0);
    const roundVal = approximate ? roundValue(val) : val;
    val = parseFloat(roundVal) + ' Lakh';
  } else if (value >= 1000) {
    val = ROUND_DOWN(value)
    val = NUM_FORMATTING(value)
  } else {
    val = value;
  }
  return val;
}

export const NUM_DIFFERENTIATION_GRAPH = (value, approximate = true) => {
  let val;
  if (value >= 10000000) {
      val = ROUND_DOWN(value / 10000000.0);
      const roundVal = approximate ? roundValue(val) : val;
      val = parseFloat(roundVal) + ' Cr';
  } else if (value >= 100000) {
      const roundVal = approximate ? roundValue(val) : val;
      val = ROUND_DOWN(value / 100000.0);
      val = parseFloat(roundVal) + ' L';
  } else if (value >= 1000) {
      val = ROUND_DOWN(value / 1000) + ' K';
  } else {
      val = ROUND_DOWN(value);
  }
  return val;
}

export const NUM_FORMATTING = (value) => {
  var val = '';
  if (value) {
      var x = value;
      x = x.toString();
      var afterPoint = '';
      if (x.indexOf('.') > 0)
          afterPoint = x.substring(x.indexOf('.'), x.length);
      x = Math.floor(x);
      x = x.toString();
      var lastThree = x.substring(x.length - 3);
      var otherNumbers = x.substring(0, x.length - 3);
      if (otherNumbers !== '')
          lastThree = ',' + lastThree;
      val = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
  }
  return val
}

export const ROUND_DOWN = (value) => Math.floor(value * 100.0) / 100.0;

export const GET_HOST_NAME = (request) => {
  if (!request.req) {
    const { host } = location;
    return host;
  }

  const { headers = {} } = request.req || {};
  const { host = '' } = headers;
  return host;
}