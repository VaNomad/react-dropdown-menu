/* eslint-disable react/prop-types */

export default function DropDownItem(props) {
  console.log(props);

  return (
    <li>
      <img src={props.image} alt="" />
      <a href="">{props.text}</a>
    </li>
  );
}