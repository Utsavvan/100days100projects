const fetchToursData = async () => {
  const response = await fetch("https://course-api.com/react-tours-project");
  const data = await response.json();
  return data;
};

export { fetchToursData };
