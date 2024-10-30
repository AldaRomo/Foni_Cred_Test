{
  /*Funcion para usar globalmente todos los fetch*/
}
export function resolveRequest({ method, url, body, waitTime = 11000 }) {

  return new Promise((resolve, reject) => {
    let controller = new AbortController();
    setTimeout(() => controller.abort(), waitTime);
    try {
      const options = {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        signal: controller.signal
      };


      fetch(url, options)
        .then((response) => response.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log("error: ", err);
          reject(err);
        });
    } catch (err) {
      reject(err);
    }
  });

}
