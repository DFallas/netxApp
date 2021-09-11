
export default function Course({course}){
    return (
        <div>
            {course && course.title}
        </div>
    )
}




export async function getStaticProps({ params }) {
    return {
      props: {
          course:{
              title:"Mi first Course"
          }
      }, // will be passed to the page component as props
    }
  }

  export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: '1' } },
        { params: { id: '2' } }
      ],
      fallback: true,
    };
  }