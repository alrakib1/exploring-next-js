

const DynamicPage = ({params, searchParams}) => {
   
    console.log(searchParams)
    return (
        <div>
            <h3>This is dynamic page no {params.id}</h3>
        </div>
    );
};

export default DynamicPage;