// level {1/2/3}

// level 2

async function getUsers() {
  const doc = await Promise.all(getUser(), getProfile(), getPosts());

    const { user, Profile, p } = doc;

  const userProfile = {
    user,
    profile: Profile,
    posts: p
  };

  return userProfile;
}
