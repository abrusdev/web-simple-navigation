import Button from "../components/button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded>Hello world</Button>
      </div>

      <div>
        <Button secondary outlined>Hello world 2</Button>
      </div>

      <div>
        <Button success>Hello world 3</Button>
      </div>

      <div>
        <Button warning>Hello world 4</Button>
      </div>

      <div>
        <Button danger>Hello world 4</Button>
      </div>

    </div>
  );
}

export default ButtonPage;