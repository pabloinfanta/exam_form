class AppointmentMailer < ApplicationMailer
  def appointment_email(info)
    @info = info
    mail(to: 'reservas.gesalud@gmail.com', subject: 'Agendamiento '"#{@info['company']}")
  end
end