import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function GithubUser({ username="Octocat"}) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data from Github API:', error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        userData && (
          <div>
            <h2>{userData.name}</h2>
          </div>
        )
      )}
    </div>
  );
}

GithubUser.propTypes = {
  username: PropTypes.string,
};