import Card from 'react-bootstrap/Card';

function BlogCard({title,image,description}) {
  return <div className='mx-auto'>
    <Card style={{ width: '30rem',padding:"10px"}}>
      <Card.Title>{title}</Card.Title>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
}

export default BlogCard;