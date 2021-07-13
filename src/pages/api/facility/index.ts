export const createFacility = async (props: any) => {  
  await fetch(`${process.env.REACT_APP_BASE_URL}/facilities`,{
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "X-Heltek-Token": props.token,
      },
      body: JSON.stringify(props.body),
    }
  )
    .then((response) => response.json())
    .then((json) => props.result(json))
    .catch(err => console.log(err));
}

export const getAllFacilities = async (props: any) => {
  await fetch(`${process.env.REACT_APP_BASE_URL}/facilities?page=${props.page}&limit=${props.limit}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      "X-Heltek-Token": props.token,
    },
  })
    .then((response) => response.json())
    .then((json) => props.result(json))
    .catch(err => console.log(err));
};

export const getFacilityById = async (props: any) => {
    await fetch(`${process.env.REACT_APP_BASE_URL}/facilities/${props.id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      "X-Heltek-Token": props.token,
    },
  })
    .then((response) => response.json())
    .then((json) => props.result(json))
    .catch(err => console.log(err));
};

export const updateFacility = async (props: any) => {
  await fetch(`${process.env.REACT_APP_BASE_URL}/facilities/${props.id})`,{
      method: "PUT",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "X-Heltek-Token": props.token,
      },
      body: JSON.stringify(props.body),
    }
  )
    .then((response) => response.json())
    .then((json) => props.result(json))
    .catch(err => console.log(err));
}

export const deleteFacility = async (props: any) => {
  await fetch(`${process.env.REACT_APP_BASE_URL}/facilities/${props.id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      "X-Heltek-Token": props.token,
    },
  })
  .then((response) => response.json())
  .then((json) => props.result(json))
  .catch(err => console.log(err));
}
