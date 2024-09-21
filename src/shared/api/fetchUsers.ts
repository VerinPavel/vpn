const fetchUsers = async () => {
  const users = await fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => data.results);
    
  return users;
};

export { fetchUsers };
