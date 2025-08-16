import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Contact = () => {
  const { toast } = useToast();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string()
      .min(5, "Subject must be at least 5 characters")
      .required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (values: typeof initialValues, { setSubmitting, resetForm }: any) => {
    try {
      const messageData = {
        ...values,
        timestamp: new Date().toISOString(),
        id: Date.now(),
      };

      await axios.post(
        "https://form-store-447b9-default-rtdb.firebaseio.com/marks.json",
        messageData
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      resetForm();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open to collaborating on innovative web applications and scalable
            solutions. Get in touch to discuss how I can contribute to your
            team’s success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-foreground">
                  Get in Touch
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  I’d love to connect and discuss how my skills and experience
                  can help drive your team’s success.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">
                      shakeeldev786@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+92 (317) 411-2323</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Available Worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-foreground">
                Send a Message
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and I'll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Field
                          as={Input}
                          name="name"
                          placeholder="Your Name"
                          className={`bg-background border-border ${
                            errors.name && touched.name ? "border-destructive" : ""
                          }`}
                        />
                        <ErrorMessage
                          name="name"
                          component="p"
                          className="text-sm text-destructive mt-1"
                        />
                      </div>
                      <div>
                        <Field
                          as={Input}
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          className={`bg-background border-border ${
                            errors.email && touched.email ? "border-destructive" : ""
                          }`}
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="text-sm text-destructive mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Field
                        as={Input}
                        name="subject"
                        placeholder="Subject"
                        className={`bg-background border-border ${
                          errors.subject && touched.subject ? "border-destructive" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="subject"
                        component="p"
                        className="text-sm text-destructive mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        as={Textarea}
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        className={`bg-background border-border ${
                          errors.message && touched.message ? "border-destructive" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="text-sm text-destructive mt-1"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
