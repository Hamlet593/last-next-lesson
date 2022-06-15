import Head from 'next/head';

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    return {
        props: {
            reviews: data.slice(0, 20)
        }
    }
}

export async function getToken() {
    const response = await fetch('https://devapi.kinodaran.com:9090/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': 'hamlet@advancedtech.am',
            'password': 'Grqamolutyun93$'
        })
    });
    const data = await response.json();
    return data;
}

let myToken = getToken();
console.log(myToken);

// export async function getPosts() {
//     const response = await fetch('https://devapi.kinodaran.com:9090/auth', {
//         method: 'GET',
//         body: JSON.stringify({
//             'email': 'hamlet@advancedtech.am',
//             'password': 'Grqamolutyun93$'
//         })
//     });
//     const data = await response.json();
//     console.log(data);
// }


const Reviews = ({reviews}) => {
    return (
        <>
            <Head>
                <title>Customers reviews</title>
            </Head>
            <div className='text-center'>
                <h1>Hamburger lovers fedbacks</h1>
                <div className='reviews'>
                    {!!reviews.length && reviews.map(review => {
                        return (
                            <div key={review.id} className='review mb-2'>
                                {review.id}
                                {` ${review.body.slice(0, 60)}...`}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
  }
  
  export default Reviews;