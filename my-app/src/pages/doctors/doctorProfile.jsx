import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Input from '../../components/Input';
import Btn from '../../components/btn';

const DoctorProfile = () => {
  // State for appointment details and step tracking
  const [appointment, setAppointment] = useState({
    date: '',
    time: '',
    reason: '',
  });
  const [payment, setPayment] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
  });
  const [selectedTime, setSelectedTime] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPayment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setAppointment((prev) => ({
      ...prev,
      time,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Details:', appointment);
    console.log('Payment Information:', payment);
    // Add logic to submit to API or back-end
  };

  // Predefined time slots
  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM'
  ];

  return (
    <main className="p-2 md:p-5 mt-20">
         <div className="mb-5">
              <Btn type="button" label={ <FontAwesomeIcon icon={faArrowLeft} />} path="/doctors" />
          </div>
      {/* Appointment Form Section */}
      <section className="mt-5 bg-white p-6 rounded ">
        <form onSubmit={handleSubmit} className="md:w-2/3 m-auto">

          {/* Step 1: Choose Date */}
          {currentStep === 1 && (
            <div className="mb-4 shadow p-5 rounded">
              <Input
                label="Choose a date"
                type="date"
                id="date"
                name="date"
                value={appointment.date}
                onChange={handleChange}
                autocomplete="date"
                required
              />

              <label className="block text-lg font-medium text-gray-700 mb-2">Choose Time</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timeSlots.map((time) => (
                  <div
                    key={time}
                    onClick={() => handleTimeSelection(time)}
                    className={`cursor-pointer p-4 text-center rounded-md border ${
                      selectedTime === time
                        ? 'bg-sky-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-sky-200'
                    }`}
                  >
                    {time}
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="w-full bg-sky-600 text-white p-3 rounded-md font-semibold hover:bg-sky-700 transition mt-4"
                onClick={() => setCurrentStep(2)}
              >
                Next
              </button>
            </div>
          )}

          {/* Step 2: Checkout - Payment Form */}
          {currentStep === 2 && (
            <div className="mb-4 shadow p-5 rounded">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>

              {/* Card Number */}
              <label htmlFor="cardNumber" className="block text-lg font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={payment.cardNumber}
                onChange={handlePaymentChange}
                placeholder="1234 5678 1234 5678"
                required
                className="w-full rounded p-3 bg-slate-100 border-white focus:outline-none focus:ring-4 mb-4"
              />

              {/* Expiry Date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-lg font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={payment.expiryDate}
                    onChange={handlePaymentChange}
                    placeholder="MM/YY"
                    required
                    className="w-full rounded p-3 bg-slate-100 border-white focus:outline-none focus:ring-4 mb-4"
                  />
                </div>

                <div>
                  <label htmlFor="cvv" className="block text-lg font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={payment.cvv}
                    onChange={handlePaymentChange}
                    placeholder="123"
                    required
                    className="w-full rounded p-3 bg-slate-100 border-white focus:outline-none focus:ring-4 mb-4"
                  />
                </div>
              </div>

              {/* Cardholder Name */}
              <label htmlFor="cardHolderName" className="block text-lg font-medium text-gray-700 mb-2">
                Cardholder Name
              </label>
              <input
                type="text"
                id="cardHolderName"
                name="cardHolderName"
                value={payment.cardHolderName}
                onChange={handlePaymentChange}
                placeholder="John Doe"
                required
                className="w-full rounded p-3 bg-slate-100 border-white focus:outline-none focus:ring-4 mb-4"
              />

              <button
                type="button"
                className="w-full bg-sky-600 text-white p-3 rounded-md font-semibold hover:bg-sky-700 transition mt-4"
                onClick={() => setCurrentStep(3)}
                disabled={!payment.cardNumber || !payment.expiryDate || !payment.cvv || !payment.cardHolderName}
              >
                Next
              </button>
            </div>
          )}

          {/* Step 3: Reason for Visit */}
          {currentStep === 3 && (
            <div className="mb-4 shadow p-5 rounded">
              <label htmlFor="reason" className="block text-lg font-medium text-gray-700">
                Reason for Visit
              </label>
              <textarea
                id="reason"
                name="reason"
                value={appointment.reason}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your symptoms or reason for the visit"
                required
                className="rounded p-3 bg-slate-100 border-white hover:border-primary-color focus:outline-none focus:ring-4 w-full mt-4"
              ></textarea>

              <button
                type="button"
                className="w-full bg-sky-600 text-white p-3 rounded-md font-semibold hover:bg-sky-700 transition mt-4"
                onClick={() => setCurrentStep(4)}
                disabled={!appointment.reason}
              >
                Next
              </button>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <section>
              {/* Success Message */}
              <div className="bg-green-400 p-5 text-lg text-center text-white font-bold">
                <h1>Your appointment has been successfully booked.</h1>
                <p className="text-sm mt-3">
                  If you have any questions or need to make changes to your appointment, feel free to{' '}
                  <NavLink className="underline cursor-pointer" to="/contact">
                    contact us
                  </NavLink>.
                </p>
              </div>

              {/* Additional Info and Reason */}
              <div className="mt-5">
                <label htmlFor="reason" className="block text-lg font-medium text-gray-700">
                  Do not hesitate to contact your doctor
                </label>
                <textarea
                  id="message"
                  name="message"
                 
                 
                  rows="4"
                  placeholder="Your message"
                  required
                  className="rounded p-3 bg-slate-100 border-white hover:border-primary-color focus:outline-none focus:ring-4 w-full mt-4"
                ></textarea>
                <button
                  type="button"
                  className="w-fit bg-sky-600 text-white p-3 rounded-md font-semibold hover:bg-sky-700 transition mt-4"
                >
                  Send
                </button>
              </div>
            </section>
          )}
        </form>
      </section>
    </main>
  );
};

export default DoctorProfile;