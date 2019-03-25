---
title:
sidebar: true
---

```python
import datetime
from dateutil.relativedelta import *
import calendar

def calculardataposterior(dataanterior, dataposterior):
    novadata = dataposterior
    if dataposterior.day < dataanterior.day:
        novadata = dataposterior + relativedelta(days=1)
    print "| dataanterior: %s " % dataanterior.strftime('%d-%m-%Y'),
    print "| dataposterior: %s " % dataposterior.strftime('%d-%m-%Y'),
    print "| novadata: %s |" % novadata.strftime('%d-%m-%Y')
    print "------------------------------------------------"
    return novadata

# 31/01/2013
fim_do_ano=datetime.date(2013,01,31)
for x in range(1, 18):
    outro_ano=fim_do_ano + relativedelta(months=x)
    calculardataposterior(fim_do_ano,outro_ano)
```

|     |                           |                            |                      |
| :---| :----------------------   | :------------------------  | :------------------- |
| +1  | dataanterior: 31-01-2013  | dataposterior: 28-02-2013  | novadata: 01-03-2013 |
| +2  | dataanterior: 31-01-2013  | dataposterior: 31-03-2013  | novadata: 31-03-2013 |
| +3  | dataanterior: 31-01-2013  | dataposterior: 30-04-2013  | novadata: 01-05-2013 |
| +4  | dataanterior: 31-01-2013  | dataposterior: 31-05-2013  | novadata: 31-05-2013 |
| +5  | dataanterior: 31-01-2013  | dataposterior: 30-06-2013  | novadata: 01-07-2013 |
| +6  | dataanterior: 31-01-2013  | dataposterior: 31-07-2013  | novadata: 31-07-2013 |
| +7  | dataanterior: 31-01-2013  | dataposterior: 31-08-2013  | novadata: 31-08-2013 |
| +8  | dataanterior: 31-01-2013  | dataposterior: 30-09-2013  | novadata: 01-10-2013 |
| +9  | dataanterior: 31-01-2013  | dataposterior: 31-10-2013  | novadata: 31-10-2013 |
| +10 | dataanterior: 31-01-2013  | dataposterior: 30-11-2013  | novadata: 01-12-2013 |
| +11 | dataanterior: 31-01-2013  | dataposterior: 31-12-2013  | novadata: 31-12-2013 |
| +12 | dataanterior: 31-01-2013  | dataposterior: 31-01-2014  | novadata: 31-01-2014 |
| +13 | dataanterior: 31-01-2013  | dataposterior: 28-02-2014  | novadata: 01-03-2014 |
| +14 | dataanterior: 31-01-2013  | dataposterior: 31-03-2014  | novadata: 31-03-2014 |
| +15 | dataanterior: 31-01-2013  | dataposterior: 30-04-2014  | novadata: 01-05-2014 |
| +16 | dataanterior: 31-01-2013  | dataposterior: 31-05-2014  | novadata: 31-05-2014 |
| +17 | dataanterior: 31-01-2013  | dataposterior: 30-06-2014  | novadata: 01-07-2014 |

------------------------------------------

|     |                           |                            |                      |
| :---| :----------------------   | :------------------------  | :------------------- |
| +1  | dataanterior: 27-01-2013  | dataposterior: 27-02-2013  | novadata: 27-02-2013 |
| +2  | dataanterior: 27-01-2013  | dataposterior: 27-03-2013  | novadata: 27-03-2013 |
| +3  | dataanterior: 27-01-2013  | dataposterior: 27-04-2013  | novadata: 27-04-2013 |
| +4  | dataanterior: 27-01-2013  | dataposterior: 27-05-2013  | novadata: 27-05-2013 |
| +5  | dataanterior: 27-01-2013  | dataposterior: 27-06-2013  | novadata: 27-06-2013 |
| +6  | dataanterior: 27-01-2013  | dataposterior: 27-07-2013  | novadata: 27-07-2013 |
| +7  | dataanterior: 27-01-2013  | dataposterior: 27-08-2013  | novadata: 27-08-2013 |
| +8  | dataanterior: 27-01-2013  | dataposterior: 27-09-2013  | novadata: 27-09-2013 |
| +9  | dataanterior: 27-01-2013  | dataposterior: 27-10-2013  | novadata: 27-10-2013 |
| +10 | dataanterior: 27-01-2013  | dataposterior: 27-11-2013  | novadata: 27-11-2013 |
| +11 | dataanterior: 27-01-2013  | dataposterior: 27-12-2013  | novadata: 27-12-2013 |
| +12 | dataanterior: 27-01-2013  | dataposterior: 27-01-2014  | novadata: 27-01-2014 |
| +13 | dataanterior: 27-01-2013  | dataposterior: 27-02-2014  | novadata: 27-02-2014 |
| +14 | dataanterior: 27-01-2013  | dataposterior: 27-03-2014  | novadata: 27-03-2014 |
| +15 | dataanterior: 27-01-2013  | dataposterior: 27-04-2014  | novadata: 27-04-2014 |
| +16 | dataanterior: 27-01-2013  | dataposterior: 27-05-2014  | novadata: 27-05-2014 |
| +17 | dataanterior: 27-01-2013  | dataposterior: 27-06-2014  | novadata: 27-06-2014 |

Testes:

  * Servidor: Antonio Rodrigo dos Santos Silva (1812251).
  * Efetivo exercício em 03/09/2010
  * Padrão 404 (2015).
  * Forma entrada: POSSE DE NOMEADO PARA CARGO EFETIVO

|      |                           |                            |                      |
| :----| :----------------------   | :------------------------  | :------------------- |
| 402  | dataanterior: 03-09-2010  | dataposterior: 03-03-2012  | novadata: 03-03-2012 |
| 403  | dataanterior: 03-03-2012  | dataposterior: 03-09-2013  | novadata: 03-09-2013 |
| 404  | dataanterior: 03-09-2013  | dataposterior: 03-03-2015  | novadata: 03-03-2015 |
| 405  | dataanterior: 03-03-2015  | dataposterior: 03-09-2016  | novadata: 03-09-2016 |
| 406  | dataanterior: 03-09-2016  | dataposterior: 03-03-2018  | novadata: 03-03-2018 |
| 407  | dataanterior: 03-03-2018  | dataposterior: 03-09-2019  | novadata: 03-09-2019 |
| 408  | dataanterior: 03-09-2019  | dataposterior: 03-03-2021  | novadata: 03-03-2021 |
| 409  | dataanterior: 03-03-2021  | dataposterior: 03-09-2022  | novadata: 03-09-2022 |
| 410  | dataanterior: 03-09-2022  | dataposterior: 03-03-2024  | novadata: 03-03-2024 |
| 411  | dataanterior: 03-03-2024  | dataposterior: 03-09-2025  | novadata: 03-09-2025 |
| 412  | dataanterior: 03-09-2025  | dataposterior: 03-03-2027  | novadata: 03-03-2027 |
| 413  | dataanterior: 03-03-2027  | dataposterior: 03-09-2028  | novadata: 03-09-2028 |
| 414  | dataanterior: 03-09-2028  | dataposterior: 03-03-2030  | novadata: 03-03-2030 |
| 415  | dataanterior: 03-03-2030  | dataposterior: 03-09-2031  | novadata: 03-09-2031 |
| 416  | dataanterior: 03-09-2031  | dataposterior: 03-03-2033  | novadata: 03-03-2033 |

------------------------------------------

  * Servidor: Joesito Brilhante Silva (269616).
  * Efetivo exercício em 01/12/1987
  * Padrão 415 (2015).
  * Forma entrada: REFORMA ADM INTEGRADA ENTRE ORGAOS

|   |                           |                            |                      |
| :-| :----------------------   | :------------------------  | :------------------- |
|402| dataanterior: 01-12-1987  | dataposterior: 01-06-1989  | novadata: 01-06-1989 |
|403| dataanterior: 01-06-1989  | dataposterior: 01-12-1990  | novadata: 01-12-1990 |
|404| dataanterior: 01-12-1990  | dataposterior: 01-06-1992  | novadata: 01-06-1992 |
|405| dataanterior: 01-06-1992  | dataposterior: 01-12-1993  | novadata: 01-12-1993 |
|406| dataanterior: 01-12-1993  | dataposterior: 01-06-1995  | novadata: 01-06-1995 |
|407| dataanterior: 01-06-1995  | dataposterior: 01-12-1996  | novadata: 01-12-1996 |
|408| dataanterior: 01-12-1996  | dataposterior: 01-06-1998  | novadata: 01-06-1998 |
|409| dataanterior: 01-06-1998  | dataposterior: 01-12-1999  | novadata: 01-12-1999 |
|410| dataanterior: 01-12-1999  | dataposterior: 01-06-2001  | novadata: 01-06-2001 |
|411| dataanterior: 01-06-2001  | dataposterior: 01-12-2002  | novadata: 01-12-2002 |
|412| dataanterior: 01-12-2002  | dataposterior: 01-06-2004  | novadata: 01-06-2004 |
|413| dataanterior: 01-06-2004  | dataposterior: 01-12-2005  | novadata: 01-12-2005 |
|414| dataanterior: 01-12-2005  | dataposterior: 01-06-2007  | novadata: 01-06-2007 |
|415| dataanterior: 01-06-2007  | dataposterior: 01-12-2008  | novadata: 01-12-2008 |
|416| dataanterior: 01-12-2008  | dataposterior: 01-06-2010  | novadata: 01-06-2010 |

