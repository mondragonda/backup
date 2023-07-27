#!/opt/homebrew/bin/python3

def military_clock_conversion(time):
 time_parts = time.split(':') 
 meridian_phase = time_parts[-1]

 before_meridian = meridian_phase.find('AM') > -1
 past_meridian = meridian_phase.find('PM') > -1
 twelfth_hour = time_parts[0] == '12'
 is_midnight = twelfth_hour and before_meridian
 is_midday = twelfth_hour and past_meridian

 conversion = time_parts[:-1]
 conversion.append(time_parts[-1].split('AM' if before_meridian else 'PM')[0])
 
 if is_midnight:
  conversion[0] = '00'
 elif is_midday:
  conversion[0] = '12'
 elif past_meridian:
  conversion[0] = str(int(conversion[0]) + 12).zfill(2)

  

 return ':'.join(conversion)

result = military_clock_conversion('01:00:00PM')
print(result) 
 

