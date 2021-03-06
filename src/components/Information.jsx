// Project Files
import InputField from "components/InputField";
import fields from "data/fields.json";

export default function Information({ profile, onChange }) {
  const FormFields = fields.map((item, index) => (
    <div id="edit-label">
      {item.label}
      <div>
        <InputField
          key={index}
          onChange={onChange}
          options={item}
          state={profile[item.key]}
        />
      </div>
    </div>
  ));

  return FormFields;
}