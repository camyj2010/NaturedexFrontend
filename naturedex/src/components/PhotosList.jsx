import React, { useEffect, useState } from 'react'
import PhotosListCSS from './PhotosList.module.css'
import Card from './Card'
import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { fetchUser } from '../functions/requests'

export default function PhotosList() {
	const [records, setRecords] = useState([])
	const {user} = useContext(UserContext);

	useEffect(() => {
		const userData = async()=>{
			const res = await fetchUser(user.id)
			const { data } = res
			setRecords(data.record)
		}
		if (user.id) {
		userData()
		}
	}, [user])

	return (
		<div className={PhotosListCSS.cardsContainer}>
			{records.map((record, index) => {
				return <Card key={index} name={record[1]} image={record[0]} description={record[2]} />
			})}
		</div>
	)
}
