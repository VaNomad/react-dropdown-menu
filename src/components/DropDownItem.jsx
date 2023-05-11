/* eslint-disable react/prop-types */

export default function DropDownItem(props) {
  console.log(props);

  return (
    <li className="text-lg mt-4">
      <img src={props.image} alt="" />
      <a href="" className="">
        {props.text}
      </a>
    </li>
  );
}