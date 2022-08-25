
export function sleep(time: number): Promise<void>{
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, time)
	})
}

export function makeZeroPadding(num: number, length: number){
	return ( Array(length).join('0') + num ).slice( -length );
}
