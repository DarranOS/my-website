import React, { useState, useEffect } from 'react'
import { MobDrinks } from 'constants/images'
import styled from 'styled-components'

const Illustration = () => {
  const [images, setimages] = useState([])

  useEffect(() => {
    const array = Object.values(MobDrinks)
    setimages(array)
    console.log(images)
  }, [])
  return (
    <div>
      Illustration
      {images.map((image) => (
        <Image src={image} alt="" />
      ))}
    </div>
  )
}

export default Illustration

const Image = styled.img`
  height: 90vh;
  width: 90vw;
`
