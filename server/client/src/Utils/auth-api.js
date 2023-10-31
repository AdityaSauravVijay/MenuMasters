

export const userLogin = async(email, password) =>{
    const res = await fetch('login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
    
    
    if (!res.ok) {
        return {'msg':'error'}
    }
    let data =""
    return res.json().then((body)=>{return body})

}

export const userRegister = async(name, email, password) =>{
    const res = await fetch('register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      })
    
    
    if (!res.ok) {
        return {'msg':'error'}
    }

    let data =""
    return res.json().then((body)=>{return body})
}

export const userUpdate = async(name, email, password, height, weight) =>{
  const res = await fetch('update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        height: height,
        weight:weight
      }),
    })
  
  
  if (!res.ok) {
      return {'msg':'error'}
  }

  let data =""
  return res.json().then((body)=>{return body})
}
