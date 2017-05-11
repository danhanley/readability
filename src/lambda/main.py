from __future__ import print_function
from textstat.textstat import textstat


import json

print('Loading function')

def respond(err, res=None):
  return {
    'statusCode': '400' if err else '200',
    'body': err.message if err else res, #json.dumps(res),
    'headers': {
      'Content-Type': 'application/json',
    }
  }


def lambda_handler(event, context):

  text = event['text']

  response = {}
  response['automated_readability_index'] = textstat.automated_readability_index(text)
  response['coleman_liau_index'] = textstat.coleman_liau_index(text)
  response['flesch_kincaid_grade'] = textstat.flesch_kincaid_grade(text)
  response['flesch_reading_ease'] = textstat.flesch_reading_ease(text)
  response['gunning_fog'] = textstat.gunning_fog(text)
  response['smog_index'] = textstat.smog_index(text)
  response['dale_chall_readability_score'] = textstat.dale_chall_readability_score(text)
  response['difficult_words'] = textstat.difficult_words(text)
  response['linsear_write_formula'] = textstat.linsear_write_formula(text)
  response['text_standard'] = textstat.text_standard(text)

  return respond(None, response)
