export async function fetchAvailablePlaces() {
  let res = await fetch("http://localhost:3000/places");
  let resData = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}

export async function fetchUserPlaces() {
  let res = await fetch("http://localhost:3000/user-places");
  let resData = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch user places");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const res = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await res.json();

  if (!res.ok) {
    throw new Error("Failed to update user places");
  }

  return resData.message;
}
