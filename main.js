const axios = require("axios").default;

async function faucet() {
  try {
    const response = await axios.post("https://testnetapi.venus.io/api/faucet", {
      address: "0x652DD7cFB9d50Ac8F01E76d577678ac0ba471b04",
      asset: "bnb",
      amountType: "high",
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

faucet();

setInterval(() => {
  faucet();
}, 910000);
