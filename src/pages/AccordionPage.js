import Accordion from "../components/accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: 'What is React JS?',
      content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly ' +
        'used to demonstrate the visual form of a document or a typeface without relying on meaningful content. '
    },
    {
      id: 2,
      label: 'What is Next JS?',
      content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly ' +
        'used to demonstrate the visual form of a document or a typeface without relying on meaningful content. '
    }
  ]

  return (
    <div>
      <Accordion items={items} />
    </div>
  )
};

export default AccordionPage;