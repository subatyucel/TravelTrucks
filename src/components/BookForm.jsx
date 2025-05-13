import { formInitials } from "../utils/formInitials";
import { formSchema } from "../utils/formSchema";
import toast from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "../components/Button";

function BookForm() {
  return (
    <Formik
      initialValues={formInitials}
      onSubmit={() => toast.success("Successfully booked!")}
      validationSchema={formSchema}
    >
      <Form className="flex flex-col gap-[14px]">
        <Field
          id="name"
          name="name"
          placeholder="Name*"
          className="p-[18px] bg-[#F7F7F7] rounded-xl"
        />
        <ErrorMessage name="name" component="p" className="text-red-500" />

        <Field
          id="email"
          name="email"
          type="email"
          placeholder="Email*"
          className="p-[18px] bg-[#F7F7F7] rounded-xl"
        />
        <ErrorMessage name="email" component="p" className="text-red-500" />

        <Field
          name="bookingDate"
          id="bookingDate"
          type="date"
          className="p-[18px] bg-[#F7F7F7] rounded-xl"
        />
        <ErrorMessage
          name="bookingDate"
          component="p"
          className="text-red-500"
        />

        <Field
          type="textarea"
          id="comment"
          name="comment"
          placeholder="Comment"
          className="p-[18px] bg-[#F7F7F7] rounded-xl h-[112px]"
        />
        <ErrorMessage name="comment" component="div" />
        <Button
          text="Send"
          cssClass="bg-[#E44848] text-[#FFFFFF] self-center"
        />
      </Form>
    </Formik>
  );
}

export default BookForm;
