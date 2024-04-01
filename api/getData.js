const getData = async (url, callback) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const result = data.slice(0, 5).map((item) => ({ name: item.title }));

    callback(result);
  } catch (error) {
    console.log(error);
  }
};

export default getData;
