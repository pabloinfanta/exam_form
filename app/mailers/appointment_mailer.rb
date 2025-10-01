class AppointmentMailer < ApplicationMailer
  def appointment_email(info)
    @info = info
    mail(to: 'pablo.infanta.z@gmail.com', subject: 'Agendamiento '"#{@info['company']}")
  end
end